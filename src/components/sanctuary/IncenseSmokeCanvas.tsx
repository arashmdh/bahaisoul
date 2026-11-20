"use client";

import { useEffect, useRef } from "react";

/**
 * LOCKED — user-calibrated emitters on 16:9 stage. Do not retune without approval.
 */
const EMITTERS = [
  { x: 0.3559, y: 0.8091 }, // was 0.3216
  { x: 0.3779, y: 0.7934 }, // was 0.3519
  { x: 0.3999, y: 0.8262 }, // was 0.3791
  { x: 0.437, y: 0.7835 }, // was 0.425
  { x: 0.563, y: 0.7849 }, // was 0.578
  { x: 0.6012, y: 0.8262 }, // was 0.6218
  { x: 0.6231, y: 0.7934 }, // was 0.6491
  { x: 0.6464, y: 0.8091 }, // was 0.6784
];

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  age: number;
  maxAge: number;
};

type Props = {
  isLit: boolean;
};

function createSmokeSprite(): HTMLCanvasElement {
  const sprite = document.createElement("canvas");
  sprite.width = 64;
  sprite.height = 64;
  const sctx = sprite.getContext("2d")!;
  const g = sctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(235, 240, 255, 0.22)");
  g.addColorStop(0.45, "rgba(210, 220, 240, 0.06)");
  g.addColorStop(1, "rgba(210, 220, 240, 0)");
  sctx.fillStyle = g;
  sctx.fillRect(0, 0, 64, 64);
  return sprite;
}

export function IncenseSmokeCanvas({ isLit }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isLitRef = useRef(isLit);
  const emissionRef = useRef(0); // 0→1 ramp
  const litSinceRef = useRef<number | null>(null);

  useEffect(() => {
    isLitRef.current = isLit;
    if (isLit) {
      litSinceRef.current = performance.now();
    } else {
      litSinceRef.current = null;
      // keep emissionRef decaying via loop when extinguished (stop spawn)
      emissionRef.current = 0;
    }
  }, [isLit]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const sprite = createSmokeSprite();
    const particles: Particle[] = [];
    let raf = 0;
    let running = true;
    let time = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const spawn = (w: number, h: number) => {
      const rate = emissionRef.current;
      if (rate <= 0.01) return;
      for (const em of EMITTERS) {
        // 2–3 particles per emitter, scaled by ramp
        const count = Math.random() < rate * 0.85 ? (Math.random() < 0.45 ? 3 : 2) : rate > 0.5 ? 1 : 0;
        for (let i = 0; i < count; i++) {
          particles.push({
            x: em.x * w + (Math.random() - 0.5) * 1.2,
            y: em.y * h + (Math.random() - 0.5) * 0.8,
            vx: (Math.random() - 0.5) * 0.08,
            vy: -0.22 - Math.random() * 0.16,
            radius: 1.5,
            alpha: 0.16,
            age: 0,
            maxAge: 320 + Math.random() * 140,
          });
        }
      }
      // soft cap for performance
      if (particles.length > 1800) {
        particles.splice(0, particles.length - 1800);
      }
    };

    const frame = (now: number) => {
      if (!running) return;
      time = now * 0.001;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      // Ignition ramp over ~2s
      if (isLitRef.current && litSinceRef.current != null) {
        const t = (now - litSinceRef.current) / 2000;
        emissionRef.current = Math.min(1, Math.max(emissionRef.current, t));
      } else {
        emissionRef.current = 0;
      }

      spawn(w, h);

      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "screen";

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.age += 1;

        const noiseAngle =
          Math.sin(p.y * 0.018 + time * 0.45) * 1.2 +
          Math.cos(p.x * 0.015 - time * 0.28) * 0.75;
        p.vx += Math.cos(noiseAngle) * 0.01;
        p.vx *= 0.988;
        p.x += p.vx;
        p.y += p.vy;
        p.radius += 0.09;

        const life = 1 - p.age / p.maxAge;
        if (life <= 0 || p.y < -40) {
          particles.splice(i, 1);
          continue;
        }

        const lifeFade = life * life;
        ctx.globalAlpha = lifeFade * 0.28 * (p.alpha / 0.16);
        const size = p.radius * 2.2;
        ctx.drawImage(sprite, p.x - size / 2, p.y - size / 2, size, size);
      }

      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
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
