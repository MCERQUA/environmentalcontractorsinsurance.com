import localFont from "next/font/local";

// Body font — DM Sans (clean, legible for dense coverage copy)
export const bodyFont = localFont({
  src: [
    { path: "./fonts/DMSans-variable.woff2", weight: "400", style: "normal" },
    { path: "./fonts/DMSans-variable.woff2", weight: "500", style: "normal" },
    { path: "./fonts/DMSans-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/DMSans-variable.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

// Heading font — Outfit (geometric, modern, clean-earth feel)
export const headingFont = localFont({
  src: [
    { path: "./fonts/Outfit-variable.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Outfit-variable.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Outfit-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Outfit-variable.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Outfit-variable.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});
