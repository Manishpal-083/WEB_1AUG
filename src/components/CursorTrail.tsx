import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Disable custom cursor on touch/mobile screens to optimize performance
    const isMobile = window.matchMedia("(max-width: 768px)").matches || 'ontouchstart' in window;
    if (isMobile) {
      canvas.style.display = "none";
      return () => window.removeEventListener("resize", handleResize);
    }

    // Hide browser default cursor
    document.body.classList.add("custom-cursor-active");

    interface HeartParticle {
      x: number;
      y: number;
      size: number;
      color: string;
      alpha: number;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
    }

    const particles: HeartParticle[] = [];
    const mouse = { x: -100, y: -100 };
    const lastMouse = { x: -100, y: -100 };

    const colors = ["#FFD6E8", "#EAD7FF", "#FFE8D6", "#FFB3D1", "#FF5A8F", "#FF8DA1"];

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const dist = Math.hypot(mouse.x - lastMouse.x, mouse.y - lastMouse.y);
      // Spawn trail hearts only when cursor moves enough, throttling density
      if (dist > 20) {
        lastMouse.x = mouse.x;
        lastMouse.y = mouse.y;

        particles.push({
          x: mouse.x,
          y: mouse.y,
          size: Math.random() * 8 + 8, // 8px to 16px
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1.0,
          speedX: Math.random() * 1.0 - 0.5,
          speedY: -(Math.random() * 0.8 + 0.4), // slowly float up
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: Math.random() * 0.04 - 0.02,
        });

        // Limit maximum active trail objects to conserve memory
        if (particles.length > 30) {
          particles.shift();
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    const handleMouseLeave = () => {
      mouse.x = -100;
      mouse.y = -100;
    };
    window.addEventListener("mouseleave", handleMouseLeave);

    // Draw function to draw a clean vector heart on canvas
    const drawHeart = (c: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      c.beginPath();
      c.moveTo(x, y + size / 4);
      c.quadraticCurveTo(x, y, x + size / 2, y);
      c.quadraticCurveTo(x + size, y, x + size, y + size / 3);
      c.quadraticCurveTo(x + size, y + (size * 2) / 3, x + size / 2, y + size);
      c.quadraticCurveTo(x, y + (size * 2) / 3, x, y + size / 3);
      c.quadraticCurveTo(x, y, x, y + size / 4);
      c.closePath();
      c.fill();
    };

    let animationId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and update active heart particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha -= 0.025; // fade out speed
        p.rotation += p.rotationSpeed;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        // Center the heart drawings relative to coordinates
        drawHeart(ctx, -p.size / 2, -p.size / 2, p.size);
        ctx.restore();
      }

      // Render custom cursor main icon (only if cursor is active within viewport)
      if (mouse.x > 0 && mouse.y > 0) {
        ctx.save();
        ctx.font = "18px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("🌸", mouse.x, mouse.y);
        ctx.restore();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[99999] w-full h-full"
    />
  );
}
