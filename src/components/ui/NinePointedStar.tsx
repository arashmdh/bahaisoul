"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  size?: number;
  animated?: boolean;
  opacity?: number;
};

/** Nine-pointed star constructed from regular 9-gon geometry (Bahá'í symbol). */
export function NinePointedStar({
  className,
  size = 120,
  animated = true,
  opacity = 1,
}: Props) {
  const cx = 50;
  const cy = 50;
  const outer = 42;
  const points = Array.from({ length: 9 }, (_, i) => {
    const angle = (Math.PI * 2 * i) / 9 - Math.PI / 2;
    return {
      x: cx + outer * Math.cos(angle),
      y: cy + outer * Math.sin(angle),
    };
  });

  // Star path connecting every 4th vertex (9/4 star polygon)
  const starPath = points
    .map((_, i) => {
      const p = points[(i * 4) % 9];
      return `${i === 0 ? "M" : "L"} ${p.x.toFixed(3)} ${p.y.toFixed(3)}`;
    })
    .join(" ") + " Z";

  const nonagon = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(3)} ${p.y.toFixed(3)}`)
    .join(" ") + " Z";

  return (
    <motion.svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={cn("text-gold", className)}
      style={{ opacity }}
      initial={animated ? { opacity: 0, rotate: -18, scale: 0.92 } : false}
      animate={animated ? { opacity, rotate: 0, scale: 1 } : undefined}
      transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    >
      <path
        d={nonagon}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.35"
      />
      <path
        d={starPath}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <circle cx={cx} cy={cy} r="2.2" fill="currentColor" opacity="0.85" />
    </motion.svg>
  );
}
