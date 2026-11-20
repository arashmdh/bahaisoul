import type { Locale } from "@/lib/i18n/dictionaries";

export type LocalizedString = Record<Locale, string>;
export type LocalizedParagraphs = Record<Locale, string[]>;

export type HistoryMilestone = {
  period: LocalizedString;
  title: LocalizedString;
  body: LocalizedString;
};

export type HistorySection = {
  heading: LocalizedString;
  paragraphs: LocalizedParagraphs;
};

export type HistorySource = {
  label: string;
  url: string;
};

export type HistoryTopic = {
  slug: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  intro: LocalizedParagraphs;
  milestones?: HistoryMilestone[];
  sections: HistorySection[];
  sources: HistorySource[];
};
