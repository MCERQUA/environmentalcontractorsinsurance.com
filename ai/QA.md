# Environmental Contractor Insurance — Build QA

**Domain:** environmentalcontractorsinsurance.com
**Niche:** Insurance for environmental remediation, abatement & hazmat contractors (CCA division)
**Identity:** "Clean Earth" — deep teal (primary) / leaf green (secondary) / slate-teal (accent); Outfit + DM Sans; topographic contour + leaf/hex motif.

## Build checklist
- [x] Next.js 15 (app router) + React 19 + Tailwind + TS + motion + lenis
- [x] 6–10 section homepage (Hero, TrustBar, ServicesGrid, WhyChooseUs, Process, CoverageMap, Stats, Testimonials, FAQ, FinalCTA)
- [x] 8 service pages (pollution-liability, general-liability, professional-liability, workers-compensation, commercial-auto, commercial-property, inland-marine-equipment, umbrella-excess-liability)
- [x] 8 location pages (regions)
- [x] Blog with 5 niche posts
- [x] Quote + contact forms → Netlify webhook (tenant=josh&site=environmentalcontractorsinsurance.com)
- [x] 20 FAQs on homepage + each service + each location page (FAQPage JSON-LD)
- [x] Full SEO: sitemap.ts, robots.ts, llms.txt, per-page OG/Twitter, JSON-LD (InsuranceAgency, InsuranceService, FAQPage, BreadcrumbList, BlogPosting)
- [x] ≥10 generated images (via HF FLUX.1-schnell)
- [x] `pnpm run build` GREEN
- [x] All files committed (incl. package.json, netlify.toml)

## Key niche facts (accuracy anchors)
- Defining risk: **pollution/legal liability** — standard ISO GL (CG 00 01) carries a builtin **Pollution Exclusion**.
- Core policy: **Contractors Pollution Liability (CPL)** — standalone, not a cheap endorsement. Covers asbestos, mold, lead, contaminated soil/groundwater, hazardous waste.
- Workers' comp class codes: **5473 (asbestos abatement)**, 5474/5403 lead, mold under 5403 or specialty code, hazmat handlers under 6232/9015.
- GL excludes pollution → CPL is mandatory companion. Professional liability covers design/sampling errors neither GL nor CPL covers.
- Mobile equipment (excavators, frac tanks, HEPA vacs, monitors) = inland marine, NOT GL/property.
- Vacuum trucks, tankers, roll-offs need commercial auto rated for hazmat hauling + cargo/pollution extension.
- Refineries, Superfund primes, and government clients often require $5M–$10M combined limits + additional-insured with pollution extension.
- Typical GL cost: $3,500–$12,000/yr for $1M/$2M. CPL: $2,500–$15,000+/yr. Full program ≈ $15k–$40k/yr.
- Certificates & additional-insured endorsements (with pollution extension) turned around fast.
- Agency: Contractors Choice Agency, Chandler AZ, founded 2005, NPN 8608479, licensed all 50 states. Phone 844-967-5247.
