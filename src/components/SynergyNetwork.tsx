import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseX: number;
  baseY: number;
}

export function SynergyNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: Node[] = [];
    
    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      targetMouseX = -1000;
      targetMouseY = -1000;
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    // Also listen on window to catch fast movements
    window.addEventListener('mousemove', handleMouseMove);

    const initNodes = () => {
      nodes = [];
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      
      // Responsive node count
      const numNodes = width < 768 ? 20 : 45;
      
      for (let i = 0; i < numNodes; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        nodes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1.5,
        });
      }
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.scale(dpr, dpr);
      initNodes();
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      
      ctx.clearRect(0, 0, width, height);
      
      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Update nodes
      nodes.forEach(node => {
        // Normal movement
        node.baseX += node.vx;
        node.baseY += node.vy;

        // Wrap around
        if (node.baseX < 0) node.baseX = width;
        if (node.baseX > width) node.baseX = 0;
        if (node.baseY < 0) node.baseY = height;
        if (node.baseY > height) node.baseY = 0;

        // Mouse interaction (push away slightly and attract slightly)
        const dx = mouseX - node.baseX;
        const dy = mouseY - node.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // 200 radius of influence
        if (dist < 200 && mouseX > -500) {
          const force = (200 - dist) / 200;
          // Gently push nodes away from cursor
          node.x = node.baseX - (dx / dist) * force * 30;
          node.y = node.baseY - (dy / dist) * force * 30;
        } else {
          // Return to base smoothly
          node.x += (node.baseX - node.x) * 0.1;
          node.y += (node.baseY - node.y) * 0.1;
        }
      });

      // Draw connections
      ctx.lineWidth = 1.2;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          const maxDist = width < 768 ? 120 : 180;

          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.4; // Subtle connections
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            
            // Draw a subtle quadratic curve to feel more organic
            const mx = (nodes[i].x + nodes[j].x) / 2 - dy * 0.1;
            const my = (nodes[i].y + nodes[j].y) / 2 + dx * 0.1;
            ctx.quadraticCurveTo(mx, my, nodes[j].x, nodes[j].y);
            
            // Gradient line
            const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            grad.addColorStop(0, `rgba(253, 184, 19, ${opacity})`); // brand-400
            grad.addColorStop(1, `rgba(15, 23, 42, ${opacity * 0.2})`); // slate-900
            
            ctx.strokeStyle = grad;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(253, 184, 19, 0.9)'; // brand-400
        ctx.fill();
        
        // Glow effect
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(253, 184, 19, 0.15)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
