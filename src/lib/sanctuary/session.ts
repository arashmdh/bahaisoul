import type { PrayerCategory } from "./sanctuaryPrayers";

export const SANCTUARY_SESSION_KEY = "bahaisoul-sanctuary-session";
/** Candle burns for 90 seconds, then auto-extinguishes and UI resets. */
export const CANDLE_TTL_MS = 90_000;

export type SanctuarySession = {
  isLit: true;
  createdAt: number;
  expiresAt: number;
  intention: string;
  category: PrayerCategory;
  prayerId: string;
  name: string | null;
  anonymous: boolean;
};

export function loadSession(): SanctuarySession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(SANCTUARY_SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as SanctuarySession;
    if (!parsed?.isLit || !parsed.expiresAt) return null;
    if (parsed.expiresAt <= Date.now()) {
      window.localStorage.removeItem(SANCTUARY_SESSION_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function saveSession(session: SanctuarySession) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(SANCTUARY_SESSION_KEY, JSON.stringify(session));
}

export function clearSession() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(SANCTUARY_SESSION_KEY);
}

export function formatCountdown(
  expiresAt: number,
  now = Date.now(),
  locale: "en" | "sv" | "fa" = "en"
): string {
  const ms = Math.max(0, expiresAt - now);
  const totalSec = Math.ceil(ms / 1000);
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;

  if (totalSec < 120) {
    if (locale === "fa") return `${totalSec}ث باقی‌مانده`;
    if (locale === "sv") return `${totalSec}s kvar`;
    return `${totalSec}s remaining`;
  }

  if (locale === "fa") return `${m}د ${s}ث باقی‌مانده`;
  if (locale === "sv") return `${m}m ${s}s kvar`;
  return `${m}m ${s}s remaining`;
}
