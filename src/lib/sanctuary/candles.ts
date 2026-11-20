import type { PrayerCategory } from "./sanctuaryPrayers";

export type SanctuaryCandle = {
  id: string;
  name: string | null;
  anonymous: boolean;
  intention: string;
  category: PrayerCategory;
  createdAt: number;
  expiresAt: number;
  amens: number;
  seeded?: boolean;
};

/** Seed/community candles use a longer window; personal lit candle is 90s in session.ts */
export const CANDLE_TTL_MS = 24 * 60 * 60 * 1000;
export const STORAGE_KEY = "bahaisoul-sanctuary-candles";

const SEED_INTENTIONS: { intention: string; category: PrayerCategory }[] = [
  { intention: "For the healing of all hearts", category: "healing" },
  { intention: "May unity dawn upon the nations", category: "unity" },
  { intention: "Guidance for seekers of truth", category: "guidance" },
  { intention: "For souls ascended to the Abhá Kingdom", category: "departed" },
  { intention: "Praise for every undeserved mercy", category: "gratitude" },
  { intention: "Peace upon every household", category: "unity" },
  { intention: "Strength for the weary", category: "healing" },
  { intention: "Light upon the path of youth", category: "guidance" },
  { intention: "For the betterment of the world", category: "unity" },
  { intention: "Comfort for those who mourn", category: "departed" },
  { intention: "Thanksgiving for friends unseen", category: "gratitude" },
  { intention: "Healing for body and spirit", category: "healing" },
  { intention: "That justice may walk the earth", category: "unity" },
  { intention: "Clarity in moments of doubt", category: "guidance" },
  { intention: "Eternal rest for the departed", category: "departed" },
  { intention: "Gratitude for the gift of prayer", category: "gratitude" },
  { intention: "Mercy upon all creation", category: "healing" },
  { intention: "One human family under heaven", category: "unity" },
];

export function createSeedCandles(now = Date.now()): SanctuaryCandle[] {
  return SEED_INTENTIONS.map((s, i) => {
    const age = ((i + 1) / SEED_INTENTIONS.length) * CANDLE_TTL_MS * 0.72;
    const createdAt = now - age;
    return {
      id: `seed-${i + 1}`,
      name: null,
      anonymous: true,
      intention: s.intention,
      category: s.category,
      createdAt,
      expiresAt: createdAt + CANDLE_TTL_MS,
      amens: 3 + ((i * 7) % 40),
      seeded: true,
    };
  });
}

export function remainingRatio(candle: SanctuaryCandle, now = Date.now()): number {
  const total = candle.expiresAt - candle.createdAt;
  if (total <= 0) return 0.15;
  const left = candle.expiresAt - now;
  return Math.min(1, Math.max(0.15, left / total));
}

export function formatRemaining(
  candle: SanctuaryCandle,
  now = Date.now(),
  locale: "en" | "sv" | "fa" = "en"
): string {
  const ms = Math.max(0, candle.expiresAt - now);
  const h = Math.floor(ms / (60 * 60 * 1000));
  const m = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
  if (locale === "fa") return `${h}س ${m}د باقی‌مانده`;
  if (locale === "sv") return `${h}t ${m}m kvar`;
  return `${h}h ${m}m remaining`;
}

export function loadCandles(): SanctuaryCandle[] {
  if (typeof window === "undefined") return createSeedCandles();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const now = Date.now();
    if (!raw) {
      const seeds = createSeedCandles(now);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seeds));
      return seeds;
    }
    const parsed = JSON.parse(raw) as SanctuaryCandle[];
    const active = parsed.filter((c) => c.expiresAt > now);
    if (active.length < 8) {
      const seeds = createSeedCandles(now).slice(0, 18 - active.length);
      const merged = [...active, ...seeds];
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      return merged;
    }
    if (active.length !== parsed.length) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(active));
    }
    return active;
  } catch {
    return createSeedCandles();
  }
}

export function saveCandles(candles: SanctuaryCandle[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(candles));
}

export function newCandle(input: {
  name: string | null;
  anonymous: boolean;
  intention: string;
  category: PrayerCategory;
}): SanctuaryCandle {
  const createdAt = Date.now();
  return {
    id: `candle-${createdAt}-${Math.random().toString(36).slice(2, 8)}`,
    name: input.anonymous ? null : input.name,
    anonymous: input.anonymous,
    intention: input.intention.trim(),
    category: input.category,
    createdAt,
    expiresAt: createdAt + CANDLE_TTL_MS,
    amens: 0,
  };
}
