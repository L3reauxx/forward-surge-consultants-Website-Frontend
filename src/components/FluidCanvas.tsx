import React, { useEffect, useRef } from 'react';

const vertexShaderSource = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision mediump float;
  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;

  // Simple random and noise functions for fluid look
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                       -0.577350269189626,  // -1.0 + 2.0 * C.x
                        0.024390243902439); // 1.0 / 41.0
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;
    
    vec2 mouse = u_mouse/u_resolution.xy;
    mouse.x *= u_resolution.x/u_resolution.y;

    // Scale the noise
    vec2 pos = vec2(st * 0.8);
    
    // Mouse interaction
    float dist = distance(st, mouse);
    float mouseEffect = smoothstep(1.0, 0.0, dist) * 0.4;
    pos += mouseEffect * 0.2 * vec2(snoise(pos + u_time * 0.1), snoise(pos - u_time * 0.1));

    // Create undulating fluid noise
    float n = snoise(pos - u_time * 0.03);
    n += 0.3 * snoise(pos * 1.5 + u_time * 0.05);
    
    // Base colors for light theme premium feel
    vec3 color1 = vec3(1.0, 1.0, 1.0); // White
    vec3 color2 = vec3(0.96, 0.97, 0.99); // Light slate
    vec3 color3 = vec3(1.0, 0.87, 0.54); // brand-200
    vec3 color4 = vec3(1.0, 0.72, 0.07); // brand-400
    
    // Smooth, slow breathing effect (0.0 to 1.0 over a long period, e.g., ~30s per cycle)
    float breathe = (sin(u_time * 0.15) + 1.0) * 0.5;
    // Map between a less pronounced (0.15) and more pronounced (0.8) state
    float intensity = mix(0.15, 0.85, breathe);

    // Mix them fluidly
    vec3 finalColor = mix(color1, color2, smoothstep(-1.2, 1.2, n));
    float n2 = snoise(pos + vec2(u_time * 0.02, -u_time * 0.03));
    finalColor = mix(finalColor, color3, smoothstep(-0.8, 0.8, n2) * (intensity * 0.8 + mouseEffect * 0.5));
    
    float n3 = snoise(pos * 0.4 - vec2(-u_time * 0.015, u_time * 0.015));
    finalColor = mix(finalColor, color4, smoothstep(0.0, 1.5, n3) * (intensity * 0.6 + mouseEffect * 0.4));

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function FluidCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program linking error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [
      -1.0, -1.0,
       1.0, -1.0,
      -1.0,  1.0,
      -1.0,  1.0,
       1.0, -1.0,
       1.0,  1.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const timeLocation = gl.getUniformLocation(program, 'u_time');
    const mouseLocation = gl.getUniformLocation(program, 'u_mouse');

    let animationFrameId: number;
    let startTime = Date.now();
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;
    
    // Add mouse move listener
    const handleMouseMove = (e: MouseEvent) => {
      // Get mouse position relative to canvas
      const rect = canvas.getBoundingClientRect();
      targetMouseX = (e.clientX - rect.left) * (window.devicePixelRatio || 1);
      targetMouseY = (rect.bottom - e.clientY) * (window.devicePixelRatio || 1); // Flip Y for WebGL
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      // Resize handling
      const dpr = window.devicePixelRatio || 1;
      const displayWidth = canvas.clientWidth * dpr;
      const displayHeight = canvas.clientHeight * dpr;

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }

      // Lerp mouse
      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      const currentTime = (Date.now() - startTime) / 1000.0;

      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, currentTime);
      gl.uniform2f(mouseLocation, mouseX, mouseY);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
    />
  );
}
