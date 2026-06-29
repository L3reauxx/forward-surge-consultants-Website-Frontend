import React, { useEffect, useRef } from 'react';

// Timings in seconds
const NODE_FADE_IN = 0.6;
const LINE_GROW = 1.8;
const HOLD = 1.0;
const FADE_OUT = 1.5;
const TOTAL_NODE_LIFE = NODE_FADE_IN + LINE_GROW + HOLD + FADE_OUT;
const MAX_CHAINS = 3; // Keep it low to prevent clutter and intersections

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface ChainNode {
  p: Point3D;
  startTime: number;
}

interface BurstLine {
  startNode: ChainNode;
  endNode: ChainNode;
  startTime: number;
  theta: number;
}

interface Burst {
  nodes: ChainNode[];
  lines: BurstLine[];
  endTime: number;
  r: number;
  g: number;
  b: number;
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function slerp(v1: Point3D, v2: Point3D, t: number): Point3D {
  let dot = v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
  dot = Math.max(-1, Math.min(1, dot)); // clamp
  
  const theta = Math.acos(dot);
  if (theta < 0.001) {
    return {
      x: v1.x + (v2.x - v1.x) * t,
      y: v1.y + (v2.y - v1.y) * t,
      z: v1.z + (v2.z - v1.z) * t,
    };
  }
  
  const sinTheta = Math.sin(theta);
  const w1 = Math.sin((1 - t) * theta) / sinTheta;
  const w2 = Math.sin(t * theta) / sinTheta;
  
  return {
    x: v1.x * w1 + v2.x * w2,
    y: v1.y * w1 + v2.y * w2,
    z: v1.z * w1 + v2.z * w2
  };
}

function getRandomUnitVector(): Point3D {
  const theta = Math.random() * 2 * Math.PI;
  const z = Math.random() * 1.2 - 0.2; // mostly front hemisphere
  const r = Math.sqrt(Math.max(0, 1 - z * z));
  return {
    x: r * Math.cos(theta),
    y: r * Math.sin(theta),
    z: z
  };
}

// Generate static background dots for the globe
const GLOBE_DOTS: Point3D[] = [];
for (let i = 0; i < 200; i++) {
  const phi = Math.acos(1 - 2 * (i + 0.5) / 200);
  const theta = Math.PI * (1 + Math.sqrt(5)) * i;
  const z = Math.cos(phi);
  if (z > -0.1) {
    GLOBE_DOTS.push({
      x: Math.sin(phi) * Math.cos(theta),
      y: Math.sin(phi) * Math.sin(theta),
      z: z
    });
  }
}

export function FlowField({ centered = false }: { centered?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let bursts: Burst[] = [];
    let lastTime = performance.now();
    let timeSeconds = 0;

    const createBurst = (currentTime: number): Burst => {
      // Use only brand yellow/orange colors
      const isYellow = Math.random() > 0.5;
      const r = isYellow ? 253 : 245;
      const g = isYellow ? 184 : 158;
      const b = isYellow ? 19 : 11;
      
      const numLines = Math.floor(Math.random() * 2) + 2; // 2 to 3 lines originating from same node
      
      const nodes: ChainNode[] = [];
      const lines: BurstLine[] = [];
      
      const originP = getRandomUnitVector();
      const originNode = { p: originP, startTime: currentTime };
      nodes.push(originNode);
      
      for (let i = 0; i < numLines; i++) {
        // Bias next point to be somewhat close to current to avoid long messy lines
        const targetP = getRandomUnitVector();
        const nextP = slerp(originP, targetP, 0.3 + Math.random() * 0.4); 
        
        let dot = originP.x * nextP.x + originP.y * nextP.y + originP.z * nextP.z;
        dot = Math.max(-1, Math.min(1, dot));
        const theta = Math.acos(dot);
        
        const lineStartOffset = i * 0.4;
        const lineStartTime = currentTime + NODE_FADE_IN + lineStartOffset;
        const destNode = { p: nextP, startTime: lineStartTime + LINE_GROW * 0.8 }; // node appears as line reaches it
        
        nodes.push(destNode);
        lines.push({
          startNode: originNode,
          endNode: destNode,
          startTime: lineStartTime,
          theta: theta
        });
      }
      
      const endTime = currentTime + NODE_FADE_IN + (numLines - 1) * 0.4 + LINE_GROW + HOLD + FADE_OUT;
      
      return { nodes, lines, endTime, r, g, b };
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.scale(dpr, dpr);
      
      bursts = [];
      timeSeconds = 0;
      lastTime = performance.now();
      for(let i=0; i<MAX_CHAINS; i++) {
        bursts.push(createBurst(timeSeconds + i * 3.0));
      }
    };

    window.addEventListener('resize', resize);
    resize();

    const getNodeOpacity = (node: ChainNode, time: number) => {
      const age = time - node.startTime;
      if (age < 0) return 0;
      if (age < NODE_FADE_IN) {
        return easeInOutCubic(age / NODE_FADE_IN);
      }
      if (age < NODE_FADE_IN + LINE_GROW + HOLD) {
        return 1;
      }
      const fadeAge = age - (NODE_FADE_IN + LINE_GROW + HOLD);
      if (fadeAge < FADE_OUT) {
        return 1 - easeInOutCubic(fadeAge / FADE_OUT);
      }
      return 0;
    };
    
    const getLineOpacity = (line: BurstLine, time: number) => {
      const age = time - line.startTime;
      if (age < 0) return 0;
      if (age < LINE_GROW + HOLD) {
        return 1;
      }
      const fadeAge = age - (LINE_GROW + HOLD);
      if (fadeAge < FADE_OUT) {
        return 1 - easeInOutCubic(fadeAge / FADE_OUT);
      }
      return 0;
    };

    const draw = (timestamp: number) => {
      const dt = (timestamp - lastTime) / 1000;
      lastTime = timestamp;
      timeSeconds += Math.min(dt, 0.1);

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      
      ctx.clearRect(0, 0, width, height);
      
      // Globe parameters
      const isMobile = width < 768;
      const cx = isMobile || centered ? width * 0.5 : width * 0.75;
      const cy = height * 0.5;
      const R = isMobile ? width * 0.4 : Math.min(width * 0.35, height * 0.4);
      
      // Draw background globe dots
      ctx.fillStyle = 'rgba(203, 213, 225, 0.4)'; // slate-300
      GLOBE_DOTS.forEach(dot => {
        const x = cx + dot.x * R;
        const y = cy + dot.y * R;
        const size = 0.5 + (dot.z + 0.1) * 1.5;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Manage bursts
      bursts = bursts.filter(c => c.endTime > timeSeconds);
      while (bursts.length < MAX_CHAINS) {
        // Find maximum end time of current bursts to stagger new ones
        const maxEnd = bursts.length > 0 ? Math.max(...bursts.map(c => c.endTime)) : timeSeconds;
        // Spawn slightly before the last one ends to keep continuous flow
        const nextSpawn = Math.max(timeSeconds, maxEnd - FADE_OUT - 1.0); 
        bursts.push(createBurst(nextSpawn));
      }

      // Draw lines
      bursts.forEach(burst => {
        const { r: rCol, g: gCol, b: bCol } = burst;

        burst.lines.forEach(line => {
          const age = timeSeconds - line.startTime;
          if (age < 0) return;

          const opacity = getLineOpacity(line, timeSeconds);
          if (opacity <= 0) return;
          
          const rawProgress = Math.min(1, age / LINE_GROW);
          const currentT = easeInOutCubic(rawProgress);

          ctx.beginPath();
          const steps = 30;
          for (let i = 0; i <= steps; i++) {
            const t = (i / steps) * currentT;
            const p3d = slerp(line.startNode.p, line.endNode.p, t);
            
            // Arch the line outwards based on its distance
            const arcH = Math.sin(t * Math.PI) * (line.theta * 0.35);
            const radius = R * (1 + arcH);
            
            const x = cx + p3d.x * radius;
            const y = cy + p3d.y * radius;
            
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          
          ctx.strokeStyle = `rgba(${rCol}, ${gCol}, ${bCol}, ${opacity * 0.5})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          
          // Draw head dot if still growing
          if (currentT > 0 && currentT < 1) {
            const p3d = slerp(line.startNode.p, line.endNode.p, currentT);
            const arcH = Math.sin(currentT * Math.PI) * (line.theta * 0.35);
            const radius = R * (1 + arcH);
            
            ctx.beginPath();
            ctx.arc(cx + p3d.x * radius, cy + p3d.y * radius, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${rCol}, ${gCol}, ${bCol}, ${opacity})`;
            ctx.fill();
          }
        });
      });

      // Draw nodes
      bursts.forEach(burst => {
        const { r: rCol, g: gCol, b: bCol } = burst;

        burst.nodes.forEach(node => {
          const opacity = getNodeOpacity(node, timeSeconds);
          if (opacity <= 0) return;
          
          const x = cx + node.p.x * R;
          const y = cy + node.p.y * R;
          
          // Add pulsing effect
          const pulsePhase = (timeSeconds - node.startTime) * 4;
          const pulse = Math.sin(pulsePhase) * 0.5 + 0.5; // 0 to 1
          const pulseRadius = 6 + pulse * 4;
          const innerRadius = 2.5 + pulse * 1;
          
          ctx.beginPath();
          ctx.arc(x, y, pulseRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rCol}, ${gCol}, ${bCol}, ${opacity * 0.15 * pulse})`;
          ctx.fill();
          
          ctx.beginPath();
          ctx.arc(x, y, innerRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rCol}, ${gCol}, ${bCol}, ${opacity})`;
          ctx.fill();
        });
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [centered]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
