"use client";

import { useEffect, useRef } from "react";

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  speed: number;
  tailLength: number;
  size: number;
  life: number;
  maxLife: number;
  hue: string;
}

interface Dust {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  life: number;
  maxLife: number;
  gold: boolean;
}

const INTERACTIVE =
  "button, input, textarea, a, select, label, [data-no-star], [role='button'], [role='dialog']";

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function makeStar(
  x: number,
  y: number,
  angle: number,
  speed = rand(5.5, 9.5)
): ShootingStar {
  return {
    x,
    y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    speed,
    tailLength: rand(70, 140),
    size: rand(1.4, 2.6),
    life: 0,
    maxLife: rand(55, 95),
    hue: Math.random() > 0.45 ? "#FDE68A" : "#FFFFFF",
  };
}

/** Spawn from a random screen edge, flying inward/across */
function spawnFromEdge(w: number, h: number): ShootingStar {
  const edge = Math.floor(Math.random() * 4);
  let x = 0;
  let y = 0;
  let angle = 0;

  if (edge === 0) {
    x = rand(0, w);
    y = -20;
    angle = rand(0.35, Math.PI - 0.35);
  } else if (edge === 1) {
    x = w + 20;
    y = rand(0, h);
    angle = rand(Math.PI * 0.55, Math.PI * 1.45);
  } else if (edge === 2) {
    x = rand(0, w);
    y = h + 20;
    angle = rand(-Math.PI + 0.35, -0.35);
  } else {
    x = -20;
    y = rand(0, h);
    angle = rand(-Math.PI * 0.45, Math.PI * 0.45);
  }

  return makeStar(x, y, angle);
}

/** Spawn near a click, flying in a random diagonal direction */
function spawnNearClick(cx: number, cy: number, w: number, h: number): ShootingStar {
  const angle = Math.random() * Math.PI * 2;
  const back = rand(40, 120);
  const x = Math.min(w + 10, Math.max(-10, cx - Math.cos(angle) * back));
  const y = Math.min(h + 10, Math.max(-10, cy - Math.sin(angle) * back));
  return makeStar(x, y, angle, rand(6.5, 11));
}

type Props = {
  /** Scope clicks to this element; defaults to window */
  className?: string;
};

/**
 * Canvas shooting stars — tail locked to −velocity, ambient + click spawn.
 */
export function ShootingStarCanvas({ className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let stars: ShootingStar[] = [];
    let dust: Dust[] = [];
    let ambientTimer = 0;
    let nextAmbient = rand(4000, 8000);
    let last = performance.now();
    let w = 0;
    let h = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      const rect = parent?.getBoundingClientRect() ?? canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.max(1, Math.floor(rect.width));
      h = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const emitDust = (star: ShootingStar) => {
      if (Math.random() > 0.55) return;
      dust.push({
        x: star.x + rand(-2, 2),
        y: star.y + rand(-2, 2),
        vx: -star.vx * 0.04 + rand(-0.25, 0.25),
        vy: -star.vy * 0.04 + rand(-0.25, 0.25),
        r: rand(0.6, 1.4),
        life: 0,
        maxLife: rand(28, 42), // ~0.5–0.7s at 60fps
        gold: Math.random() > 0.4,
      });
      if (dust.length > 220) dust.splice(0, dust.length - 220);
    };

    const draw = (now: number) => {
      const dt = Math.min(32, now - last);
      last = now;
      ambientTimer += dt;

      if (ambientTimer >= nextAmbient) {
        ambientTimer = 0;
        nextAmbient = rand(4000, 8000);
        stars.push(spawnFromEdge(w, h));
      }

      ctx.clearRect(0, 0, w, h);

      // —— stars ——
      for (let i = stars.length - 1; i >= 0; i--) {
        const star = stars[i];
        star.x += star.vx;
        star.y += star.vy;
        star.life += 1;
        emitDust(star);

        const mag = Math.hypot(star.vx, star.vy) || 1;
        const ux = star.vx / mag;
        const uy = star.vy / mag;

        // Tail end strictly OPPOSITE (−ux, −uy) behind the head
        const currentTail =
          star.tailLength * Math.min(1, star.life / 12);
        const tailX = star.x - ux * currentTail;
        const tailY = star.y - uy * currentTail;

        const fade = Math.max(0, 1 - star.life / star.maxLife);
        const grad = ctx.createLinearGradient(star.x, star.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 252, 235, ${0.95 * fade})`);
        grad.addColorStop(0.25, `rgba(251, 191, 36, ${0.55 * fade})`);
        grad.addColorStop(1, "rgba(251, 191, 36, 0)");

        ctx.save();
        ctx.lineCap = "round";
        ctx.strokeStyle = grad;
        ctx.lineWidth = star.size * 1.6;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        ctx.fillStyle = `rgba(255, 255, 255, ${fade})`;
        ctx.shadowColor = star.hue;
        ctx.shadowBlur = 14;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        const off =
          star.x < -160 ||
          star.x > w + 160 ||
          star.y < -160 ||
          star.y > h + 160;
        if (star.life >= star.maxLife || off) {
          stars.splice(i, 1);
        }
      }

      // —— stardust wake ——
      for (let i = dust.length - 1; i >= 0; i--) {
        const d = dust[i];
        d.x += d.vx;
        d.y += d.vy;
        d.life += 1;
        const fade = Math.max(0, 1 - d.life / d.maxLife);
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = d.gold
          ? `rgba(253, 230, 138, ${0.7 * fade})`
          : `rgba(255, 255, 255, ${0.65 * fade})`;
        ctx.fill();
        if (d.life >= d.maxLife) dust.splice(i, 1);
      }

      raf = requestAnimationFrame(draw);
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const forceSpawn = Boolean(target?.closest?.("[data-spawn-star]"));
      if (!forceSpawn && target?.closest?.(INTERACTIVE)) return;

      const rect = canvas.getBoundingClientRect();
      const over =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      if (!over && !forceSpawn) return;

      const x = forceSpawn
        ? w / 2 + rand(-40, 40)
        : e.clientX - rect.left;
      const y = forceSpawn
        ? h / 2 + rand(-40, 40)
        : e.clientY - rect.top;
      stars.push(spawnNearClick(x, y, w, h));
      if (stars.length > 12) stars.shift();
    };

    resize();
    // First ambient soon after mount
    stars.push(spawnFromEdge(w, h));
    last = performance.now();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("click", onClick, true);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", onClick, true);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 z-[5] h-full w-full ${className ?? ""}`}
      aria-hidden
    />
  );
}
