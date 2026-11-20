import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        alabaster: {
          DEFAULT: "#FAF8F5",
          warm: "#F3EEE6",
        },
        indigo: {
          DEFAULT: "#0F172A",
          soft: "#1A2744",
        },
        gold: {
          DEFAULT: "#C5A059",
          soft: "#D4B87A",
          deep: "#9A7A3C",
        },
        sage: "#8A9A88",
        stone: "#6B6560",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        vazir: ["var(--font-vazir)", "Tahoma", "sans-serif"],
        nastaliq: ["var(--font-nastaliq)", "serif"],
      },
      letterSpacing: {
        temple: "0.28em",
      },
      transitionTimingFunction: {
        serene: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
