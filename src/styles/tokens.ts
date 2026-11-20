/** Design system tokens — "Temple on the Mountain" */
export const tokens = {
  color: {
    alabaster: "#FAF8F5",
    alabasterWarm: "#F3EEE6",
    indigo: "#0F172A",
    indigoSoft: "#1A2744",
    gold: "#C5A059",
    goldSoft: "#D4B87A",
    goldDeep: "#9A7A3C",
    sage: "#8A9A88",
    stone: "#6B6560",
  },
  motion: {
    serene: [0.22, 1, 0.36, 1] as const,
    duration: {
      soft: 0.7,
      slow: 1.4,
      reveal: 2.4,
    },
  },
  typography: {
    display: "Cormorant Garamond",
    sans: "Source Sans 3",
    faSans: "Vazirmatn",
    faDisplay: "IranNastaliq (fallback → Vazirmatn)",
  },
} as const;
