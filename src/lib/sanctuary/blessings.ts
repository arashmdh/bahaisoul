/**
 * Compatibility re-exports — prayer library lives in sanctuaryPrayers.ts
 */
export {
  PRAYER_CATEGORIES,
  SANCTUARY_PRAYERS,
  detectCategoryFromText as matchCategoryFromText,
  pickPrayer,
  getPrayerById,
  textFor,
  type PrayerCategory,
  type SanctuaryPrayer,
  type LocaleCode,
} from "./sanctuaryPrayers";

import type { PrayerCategory, SanctuaryPrayer } from "./sanctuaryPrayers";
import { prayersForCategory } from "./sanctuaryPrayers";

/** @deprecated Prefer SanctuaryPrayer from sanctuaryPrayers */
export type SacredBlessing = SanctuaryPrayer;

/** First prayer per category — legacy single-blessing map */
export const BLESSINGS: Record<PrayerCategory, SanctuaryPrayer> = {
  healing: prayersForCategory("healing")[0],
  guidance: prayersForCategory("guidance")[0],
  unity: prayersForCategory("unity")[0],
  departed: prayersForCategory("departed")[0],
  gratitude: prayersForCategory("gratitude")[0],
  personal: prayersForCategory("personal")[0],
};
