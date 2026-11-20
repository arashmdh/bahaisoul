"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleProvider";

function sessionId() {
  const key = "bahaisoul-presence";
  let id = window.sessionStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    window.sessionStorage.setItem(key, id);
  }
  return id;
}

export function VisitorPresence() {
  const { t } = useLocale();
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    const beat = async () => {
      try {
        const res = await fetch("/api/presence", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId: sessionId() }),
        });
        const data = (await res.json()) as { count: number };
        if (!cancelled) setCount(data.count);
      } catch {
        if (!cancelled) setCount(1);
      }
    };

    void beat();
    const interval = window.setInterval(beat, 25000);
    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, []);

  const label =
    count === null
      ? "…"
      : count <= 1
        ? count === 0
          ? t.presence.alone
          : t.presence.one
        : t.presence.many.replace("{n}", String(count));

  return (
    <div className="inline-flex items-center gap-2 font-sans text-xs tracking-wide text-alabaster/60">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage/60 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-sage" />
      </span>
      {label}
    </div>
  );
}
