import { Outfit, DM_Sans } from "next/font/google";

// Body font — DM Sans (clean, legible for dense coverage copy)
export const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Heading font — Outfit (geometric, modern, clean-earth feel)
export const headingFont = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});
