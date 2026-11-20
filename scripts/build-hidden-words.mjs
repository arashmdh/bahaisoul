/**
 * Builds src/lib/hidden-words.ts from:
 * - Official English (Shoghi Effendi) in /tmp/hw_en_persian.json
 * - Persian text provided by project (scripts/hidden-words-fa.txt)
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const en = JSON.parse(fs.readFileSync("/tmp/hw_en_persian.json", "utf8"));
const faRaw = fs.readFileSync(path.join(__dirname, "hidden-words-fa.txt"), "utf8");

const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
function toWestern(s) {
  return s.replace(/[۰-۹]/ (d) => String(persianDigits.indexOf(d)));
}

// Split on standalone numbers 1..82 (Persian or Western)
const parts = faRaw
  .replace(/\r\n/g, "\n")
  .split(/\n(?=[۰-۹]{1,2}|[0-9]{1,2})\n?/)
  .map((p) => p.trim())
  .filter(Boolean);

const fa = [];
for (const part of parts) {
  const lines = part.split("\n").map((l) => l.trim()).filter(Boolean);
  if (!lines.length) continue;
  // First line may be number
  let start = 0;
  if (/^[۰-۹0-9]{1,2}$/.test(lines[0])) start = 1;
  const body = lines.slice(start).join(" ").replace(/\s+/g, " ").trim();
  // Clean elongated spaces in word 2 etc
  const cleaned = body.replace(/‌+/g, "‌").replace(/ +/g, " ");
  if (cleaned) fa.push(cleaned);
}

// If first block has no number (starts with ای صاحبان), it's #1
if (fa.length === 82) {
  // ok
} else if (fa.length === 83 && fa[0].startsWith("بنام")) {
  fa.shift();
}

console.log("FA count:", fa.length, "EN count:", en.length);
if (fa.length !== 82 || en.length !== 82) {
  console.error("Expected 82 each");
  fa.forEach((f, i) => console.log(i + 1, f.slice(0, 40)));
  process.exit(1);
}

const items = fa.map((persian, i) => {
  const english = en[i];
  // Extract invocation for display
  const faTitle = persian.split(/\s+/).slice(0, 4).join(" ");
  return {
    number: i + 1,
    fa: persian,
    en: english,
    // Swedish: no official translation bundled — use English (authoritative)
    sv: english,
  };
});

const out = `/* Auto-generated — The Hidden Words (Persian), Bahá'u'lláh
 * English: Shoghi Effendi (Bahá'í Reference Library)
 * Persian: Official text (user-verified)
 * Swedish: falls back to English until an official SV edition is wired in
 */
export type HiddenWord = {
  number: number;
  fa: string;
  en: string;
  sv: string;
};

export const HIDDEN_WORDS_PREFACE = {
  fa: "بنام گویندهٔ توانا",
  en: "In the Name of the Lord of Utterance, the Mighty",
  sv: "In the Name of the Lord of Utterance, the Mighty",
} as const;

export const HIDDEN_WORDS: HiddenWord[] = ${JSON.stringify(items, null, 2)};

export function getDailyHiddenWordIndex(date = new Date()): number {
  const start = Date.UTC(date.getUTCFullYear(), 0, 0);
  const now = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  const dayOfYear = Math.floor((now - start) / 86400000);
  return (dayOfYear - 1) % HIDDEN_WORDS.length;
}

export function getHiddenWord(index: number): HiddenWord {
  const i = ((index % HIDDEN_WORDS.length) + HIDDEN_WORDS.length) % HIDDEN_WORDS.length;
  return HIDDEN_WORDS[i];
}
`;

fs.writeFileSync(path.join(root, "src/lib/hidden-words.ts"), out);
console.log("Wrote src/lib/hidden-words.ts with", items.length, "words");
