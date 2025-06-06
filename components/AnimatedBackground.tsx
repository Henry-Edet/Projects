'use client';

import { useEffect, useRef } from 'react';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Shape drawing functions
    const shapeDrawers = {
      circle: (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      },
      triangle: (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
        ctx.beginPath();
        ctx.moveTo(x, y - size);
        ctx.lineTo(x + size, y + size);
        ctx.lineTo(x - size, y + size);
        ctx.closePath();
        ctx.fill();
      },
      square: (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
        ctx.fillRect(x - size/2, y - size/2, size, size);
      },
      rectangle: (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
        const width = size * 1.5;
        const height = size * 0.8;
        ctx.fillRect(x - width/2, y - height/2, width, height);
      },
      trapezium: (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
        const topWidth = size * 1.2;
        const bottomWidth = size * 1.8;
        ctx.beginPath();
        ctx.moveTo(x - topWidth/2, y - size/2);
        ctx.lineTo(x + topWidth/2, y - size/2);
        ctx.lineTo(x + bottomWidth/2, y + size/2);
        ctx.lineTo(x - bottomWidth/2, y + size/2);
        ctx.closePath();
        ctx.fill();
      },
      rhombus: (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
        ctx.beginPath();
        ctx.moveTo(x, y - size);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x, y + size);
        ctx.lineTo(x - size, y);
        ctx.closePath();
        ctx.fill();
      },
      pentagon: (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          const angle = (i * 2 * Math.PI / 5) - Math.PI/2;
          ctx.lineTo(x + size * Math.cos(angle), y + size * Math.sin(angle));
        }
        ctx.closePath();
        ctx.fill();
      }
    };

    const shapeTypes = Object.keys(shapeDrawers) as Array<keyof typeof shapeDrawers>;

    // Floating shapes configuration
    const shapes = Array.from({ length: 25 }).map(() => {
      const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 15,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        type: type,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 2 - 1
      };
    });

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      shapes.forEach(shape => {
        // Update position and rotation
        shape.x += shape.speedX;
        shape.y += shape.speedY;
        shape.rotation += shape.rotationSpeed;
        
        // Boundary check
        if (shape.x > canvas.width + shape.size * 2) shape.x = -shape.size * 2;
        if (shape.x < -shape.size * 2) shape.x = canvas.width + shape.size * 2;
        if (shape.y > canvas.height + shape.size * 2) shape.y = -shape.size * 2;
        if (shape.y < -shape.size * 2) shape.y = canvas.height + shape.size * 2;
        
        // Draw shape with rotation
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation * Math.PI / 180);
        ctx.fillStyle = shape.color;
        ctx.globalAlpha = 0.6; //handles color of shapes
        
        shapeDrawers[shape.type](ctx, 0, 0, shape.size);
        
        ctx.restore();
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}