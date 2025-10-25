import React, { useEffect, useRef } from "react";

const Particles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);

    const particles = Array.from({ length: 70 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.8 + 0.4,
    }));

    const loop = () => {
      ctx.clearRect(0, 0, width, height);
      for (let p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        gradient.addColorStop(0, "rgba(34,211,238,0.9)");
        gradient.addColorStop(1, "rgba(34,211,238,0)");
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fill();
      }
      animationId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default Particles;
