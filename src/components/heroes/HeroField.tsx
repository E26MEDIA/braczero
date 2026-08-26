"use client";

import { useEffect, useRef } from "react";

export function HeroField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const surface: HTMLCanvasElement = canvas;
    const gfx: CanvasRenderingContext2D = ctx;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let t = 0;
    const mouse = { x: 0.5, y: 0.5 };

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = surface.getBoundingClientRect();
      surface.width = Math.floor(width * dpr);
      surface.height = Math.floor(height * dpr);
      gfx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function onMove(e: MouseEvent) {
      const rect = surface.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) / Math.max(rect.width, 1);
      mouse.y = (e.clientY - rect.top) / Math.max(rect.height, 1);
    }

    function draw() {
      const { width, height } = surface.getBoundingClientRect();
      gfx.clearRect(0, 0, width, height);

      const mobile = width < 640;
      const cols = mobile ? 22 : 42;
      const rows = mobile ? 16 : 26;
      const parallaxX = (mouse.x - 0.5) * 56;
      const parallaxY = (mouse.y - 0.5) * 24;

      const drift = (t * 28) % 42;
      const scan = ((Math.sin(t * 0.55) + 1) / 2) * (rows - 1);

      for (let r = 0; r < rows; r++) {
        const depth = r / (rows - 1);
        const scale = 0.12 + depth * 1.45;
        const y = height * 0.08 + depth * height * 0.92 + parallaxY * depth;
        const spacing = 42 * scale;
        const rowWidth = cols * spacing;
        const startX = width * 0.58 - rowWidth / 2 + parallaxX * depth + drift * scale;
        const wave = reduce ? 0 : Math.sin(t * 1.4 + r * 0.35) * 0.5 + 0.5;
        const scanBoost = 1 - Math.min(1, Math.abs(r - scan) / 2.2);
        const alpha = 0.12 + depth * 0.55 + wave * 0.18 + scanBoost * 0.45;

        for (let c = 0; c < cols; c++) {
          const x = startX + c * spacing;
          if (x < -20 || x > width + 20) continue;
          const glow = c > cols * 0.55 ? 1 : 0.55;
          gfx.fillStyle = `rgba(183, 28, 40, ${alpha * glow})`;
          const size = 1.1 + depth * 1.6;
          if ((c + r) % 7 === 0) {
            gfx.font = `${8 + depth * 8}px sans-serif`;
            gfx.fillText("+", x - 4, y + 4);
          } else {
            gfx.beginPath();
            gfx.arc(x, y, size, 0, Math.PI * 2);
            gfx.fill();
          }
        }
      }

      t += 0.028;
      if (!reduce) raf = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}
