# Design System — Environmental Contractor Insurance ("Clean Earth")

Light, corporate, environmental-clean. Distinct from sibling CCA sites (not the green/copper framing palette).

## Palette (Tailwind token NAMES are shared across the component architecture; VALUES remapped here)
- **Primary — deep teal** (`clay`): `#0E5E5A` (deep teal), dark `#0A4744`, light `#1A7A75`
- **Secondary — leaf green** (`sage`): `#4C9A2A`, dark `#3A7820`, light `#6FB848`
- **Accent — slate-teal** (`gold`): `#7FB3A8`, dark `#5C9488`, light `#A4CDC4`
- Backgrounds: `cream #FBF8F3`, `sand #EEF3F1` (cool stone), white
- Text: `espresso #122E2C` (headings), `cocoa #3A4A48` (body), `mocha #6B7B78` (muted)
- Border: `adobe #DCE6E2`

## Typography
- Headings: **Outfit** (geometric, modern, clean-earth) via next/font
- Body: **DM Sans**

## Motifs
- **Topographic contour band** (`horizon-band`): layered teal→leaf→slate strata
- **Topographic contour texture** (`grain`): concentric contour lines + faint grid for hero/CTA bands
- Contour top-edge accent on cards (`card-arch::before`): teal→leaf→slate

## Components & motion
- motion (Framer) staggered hero entrances, scroll-reveal (`FadeIn`), count-up stats (`Counter`)
- lenis smooth scroll (`SmoothScroll`)
- All animations honor `prefers-reduced-motion`

## Generated imagery (HF FLUX.1-schnell)
hero, site-aerial, pollution-cleanup, gl-operations, professional-design, abatement-crew,
vacuum-truck, decon-facility, excavator-equipment, team-portrait, og-image.
Environmental-remediation tones with teal/leaf accents; PPE crews, vacuum trucks, excavators,
decon facilities; photorealistic, no text.
