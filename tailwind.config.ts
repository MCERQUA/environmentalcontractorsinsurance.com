import type { Config } from "tailwindcss";

/* ============================================================
   ENVIRONMENTAL CONTRACTOR INSURANCE — "Clean Earth" palette
   Token NAMES are inherited from the shared component architecture;
   VALUES are remapped to deep teal (primary) / leaf green (secondary) / slate-teal (accent).
   clay = deep teal · sage = leaf green · gold = slate-teal · cream = paper · sand = cool stone
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // === Backgrounds ===
        cream: "#FBF8F3",          // page background (warm paper)
        sand: "#EEF3F1",           // alt section bg (cool stone)
        white: "#FFFFFF",          // cards
        // === Primary — Deep Teal (token name: clay) ===
        clay: {
          DEFAULT: "#0E5E5A",      // primary — deep teal (clay token)
          dark: "#0A4744",
          light: "#1A7A75",
          50: "#EAF4F3",
          100: "#C9E4E2",
          200: "#93CCC8",
          300: "#5DB1AB",
          400: "#1A7A75",
          500: "#0E5E5A",
          600: "#0A4744",
          700: "#073330",
          800: "#05221F",
          900: "#031513",
        },
        // === Secondary — Leaf Green (token name: sage) ===
        sage: {
          DEFAULT: "#4C9A2A",      // secondary — leaf green
          dark: "#3A7820",
          light: "#6FB848",
          50: "#F0F7EA",
          100: "#DCEECB",
          200: "#B6DD8E",
          300: "#8BC34A",
          400: "#6FB848",
          500: "#4C9A2A",
          600: "#3A7820",
          700: "#2C5A18",
        },
        // === Accent — Slate-Teal (token name: gold) ===
        gold: {
          DEFAULT: "#7FB3A8",      // accent — slate-teal highlight
          dark: "#5C9488",
          light: "#A4CDC4",
          50: "#EFF6F4",
          100: "#D9E9E5",
          200: "#A4CDC4",
          300: "#7FB3A8",
          400: "#5C9488",
          500: "#437B70",
          600: "#2E5A52",
        },
        // === Text ===
        espresso: "#122E2C",       // headings (deep teal-charcoal ink)
        cocoa: "#3A4A48",          // body (graphite-teal)
        mocha: "#6B7B78",          // muted (slate)
        // === Borders / dividers ===
        adobe: "#DCE6E2",          // cool stone border
        adobeDark: "#C2D2CD",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        // sunrise-bands remapped to contour-style teal/leaf/slate banding
        "sunrise-bands":
          "linear-gradient(180deg, #FBF8F3 0%, #EEF3F1 40%, #EAF4F3 70%, #FBF8F3 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(76,154,42,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(14,94,90,0.08) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #0E5E5A 0%, #1A7A75 100%)",
        "sage-gradient": "linear-gradient(135deg, #4C9A2A 0%, #6FB848 100%)",
        "gold-gradient": "linear-gradient(135deg, #7FB3A8 0%, #A4CDC4 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(14, 94, 90, 0.20), 0 4px 12px -6px rgba(18, 46, 44, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(14, 94, 90, 0.25), 0 10px 30px -10px rgba(18, 46, 44, 0.10)",
        card: "0 2px 8px -2px rgba(18, 46, 44, 0.06), 0 1px 3px -1px rgba(18, 46, 44, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(14, 94, 90, 0.22), 0 8px 20px -8px rgba(18, 46, 44, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(14, 94, 90, 0.10)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "arch-rise": {
          "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
