"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type PointerState = {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
};

type Star = {
  drift: number;
  radius: number;
  twinkle: number;
  x: number;
  y: number;
};

export default function SystemBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const pointer: PointerState = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const dpr = 1;
    const stars: Star[] = [];
    let width = 0;
    let height = 0;
    let frameId = 0;
    let lastRender = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      pointer.x = width * 0.5;
      pointer.y = height * 0.5;
      pointer.targetX = pointer.x;
      pointer.targetY = pointer.y;

      stars.length = 0;
      const starCount = Math.max(30, Math.floor((width * height) / 32000));
      for (let index = 0; index < starCount; index += 1) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.2 + 0.3,
          twinkle: Math.random() * Math.PI * 2,
          drift: 0.16 + Math.random() * 0.4,
        });
      }
    };

    const drawStars = (time: number) => {
      stars.forEach((star, index) => {
        const px = star.x + pointer.x * 0.002 * star.drift + Math.sin(time * 0.00008 + index) * 0.5;
        const py = star.y + pointer.y * 0.0025 * star.drift + Math.cos(time * 0.00006 + index) * 0.5;
        const alpha = 0.35 + Math.sin(time * 0.0015 + star.twinkle) * 0.28;
        context.fillStyle = `rgba(255,255,255,${alpha})`;
        context.beginPath();
        context.arc(px, py, star.radius, 0, Math.PI * 2);
        context.fill();
      });
    };

    const drawDust = (time: number) => {
      for (let index = 0; index < 10; index += 1) {
        const cx = ((index * 97) % width) + Math.sin(time * 0.00008 + index) * 28;
        const cy = ((index * 191) % height) + Math.cos(time * 0.00005 + index * 0.7) * 24;
        const radius = 110 + (index % 4) * 34;
        const gradient = context.createRadialGradient(cx, cy, 0, cx, cy, radius);
        gradient.addColorStop(0, "rgba(120, 245, 255, 0.04)");
        gradient.addColorStop(0.5, "rgba(132, 109, 255, 0.02)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        context.fillStyle = gradient;
        context.fillRect(cx - radius, cy - radius, radius * 2, radius * 2);
      }
    };

    const render = (time: number) => {
      frameId = window.requestAnimationFrame(render);
      if (document.hidden || time - lastRender < 33) {
        return;
      }
      lastRender = time;

      context.clearRect(0, 0, width, height);
      context.fillStyle = "#040608";
      context.fillRect(0, 0, width, height);

      pointer.x += (pointer.targetX - pointer.x) * 0.08;
      pointer.y += (pointer.targetY - pointer.y) * 0.08;

      const glow = context.createRadialGradient(
        pointer.x,
        pointer.y,
        0,
        pointer.x,
        pointer.y,
        Math.max(width, height) * 0.44,
      );
      glow.addColorStop(0, "rgba(120, 245, 255, 0.1)");
      glow.addColorStop(0.45, "rgba(75, 110, 140, 0.05)");
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      drawDust(time);
      drawStars(time);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.targetX = event.clientX;
      pointer.targetY = event.clientY;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    frameId = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(frameId);
    };
  }, [pathname]);

  if (pathname !== "/") return null;
  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-95" aria-hidden="true" />;
}
