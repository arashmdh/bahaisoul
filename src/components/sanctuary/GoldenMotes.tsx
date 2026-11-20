"use client";

import { motion } from "framer-motion";

const MOTES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: 18 + ((i * 17) % 64),
  delay: (i % 9) * 0.55,
  duration: 7 + (i % 5) * 1.4,
  size: 2 + (i % 3),
  opacity: 0.25 + (i % 4) * 0.12,
}));

export function GoldenMotes() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[55%] overflow-hidden"
      aria-hidden
    >
      {MOTES.map((m) => (
        <motion.span
          key={m.id}
          className="absolute bottom-[8%] rounded-full bg-amber-300"
          style={{
            left: `${m.left}%`,
            width: m.size,
            height: m.size,
            boxShadow: `0 0 ${m.size * 4}px ${m.size}px rgba(251, 191, 36, 0.45)`,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, -180 - (m.id % 7) * 24, -320 - (m.id % 5) * 30],
            opacity: [0, m.opacity, 0],
            x: [0, (m.id % 2 === 0 ? 12 : -12), 0],
          }}
          transition={{
            duration: m.duration,
            delay: m.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
