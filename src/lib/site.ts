// Centralized site data — used across nav, footer, schema, CTAs
// Environmental Contractor Insurance — environmental remediation / hazmat / pollution abatement contractors

export const SITE = {
  name: "Environmental Contractor Insurance",
  legalName: "Environmental Contractor Insurance (by Contractors Choice Agency)",
  domain: "environmentalcontractorsinsurance.com",
  url: "https://environmentalcontractorsinsurance.com",
  tagline: "Insurance for Environmental Remediation & Hazmat Contractors",
  description:
    "Specialized commercial insurance for environmental remediation contractors — Contractors Pollution Liability (CPL), general liability (written right around the pollution exclusion), professional liability/E&O, workers' comp for asbestos/mold/lead abatement, commercial auto for vacuum and tanker trucks, mobile equipment, commercial property, and umbrella/excess. Pollution and legal liability underwritten right. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #104",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "pollution-liability",
    title: "Contractors Pollution Liability (CPL)",
    short: "The core coverage your GL excludes",
    description:
      "Coverage for pollution conditions arising from your remediation operations — asbestos, mold, lead, contaminated soil and groundwater, and hazardous waste — the exact exposure that standard general liability excludes. The essential, core policy every environmental contractor must carry.",
    icon: "Leaf",
    keywords: ["contractors pollution liability", "CPL insurance", "pollution liability insurance environmental contractor", "asbestos abatement insurance", "environmental remediation insurance"],
  },
  {
    slug: "general-liability",
    title: "General Liability Insurance",
    short: "Environmental operations — written around the pollution exclusion",
    description:
      "Third-party bodily injury and property damage protection for your remediation crews and jobsites — including products-completed operations and the GC, developer, and government additional-insured certificates that get you onto the project. Coordinated with CPL because GL excludes pollution.",
    icon: "ShieldCheck",
    keywords: ["environmental contractor general liability", "GL pollution exclusion", "remediation contractor GL", "environmental subcontractor insurance", "additional insured environmental"],
  },
  {
    slug: "professional-liability",
    title: "Professional Liability / E&O",
    short: "Remediation design, sampling & consulting",
    description:
      "Errors & omissions coverage for the professional services environmental contractors provide — remediation design, site assessment, sampling and analysis, monitoring, and consulting — protection for the financial cost of a design or advisory error that a pollution or GL policy will not cover.",
    icon: "FileSearch",
    keywords: ["environmental contractor professional liability", "remediation E&O insurance", "environmental consultant errors and omissions", "site assessment professional insurance", "environmental engineering liability"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "Asbestos, mold & lead abatement class codes",
    description:
      "Coverage for the injury and exposure patterns unique to environmental crews — asbestos, mold, and lead abatement class codes, hazmat handlers, chemical and biological exposure, heat and confined-space injury — with correct classification so you're not overpaying or underinsured.",
    icon: "HardHat",
    keywords: ["environmental contractor workers comp", "asbestos abatement workers comp class code", "mold remediation workers compensation", "hazmat workers comp", "lead abatement class code"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto Insurance",
    short: "Vacuum trucks, tankers, roll-offs & super-suckers",
    description:
      "Coverage for the vacuum trucks, tanker trucks, roll-off haulers, and super-suckers that move your crew, contaminated soil, liquids, and equipment between remediation sites and disposal facilities — including hired/non-owned and loading liability.",
    icon: "Truck",
    keywords: ["environmental contractor commercial auto", "vacuum truck insurance", "tanker truck insurance", "roll off truck insurance remediation", "super sucker insurance"],
  },
  {
    slug: "commercial-property",
    title: "Commercial Property Insurance",
    short: "Remediation yard, decon facility & office",
    description:
      "All-risk property coverage for the environmental contractor's yard, equipment decontamination facility, office, and storage — built for the specialized equipment, hazardous-material handling, and environmental exposures of a remediation operation.",
    icon: "Factory",
    keywords: ["environmental contractor commercial property", "remediation yard insurance", "decontamination facility property insurance", "environmental contractor shop insurance", "hazmat storage property coverage"],
  },
  {
    slug: "inland-marine-equipment",
    title: "Inland Marine / Mobile Equipment",
    short: "Excavators, frac tanks, HEPA vacs & monitors",
    description:
      "Scheduled coverage for the heavy mobile equipment and specialty gear remediation contractors depend on — excavators, frac tanks, HEPA vacuums, air monitors, confined-space gear, and trailers — that travels between jobsites and follows the equipment wherever it goes.",
    icon: "Wrench",
    keywords: ["environmental contractor inland marine", "mobile equipment insurance remediation", "frac tank insurance", "HEPA vacuum insurance", "excavator insurance environmental"],
  },
  {
    slug: "umbrella-excess-liability",
    title: "Umbrella / Excess Liability",
    short: "Limits to $10M+ for catastrophic contamination losses",
    description:
      "Layered limits above your GL, CPL, auto, and employers' liability — essential when a contamination release, a multi-party Superfund claim, or a catastrophic jobsite loss could otherwise exhaust your primary coverage and threaten the entire company.",
    icon: "Umbrella",
    keywords: ["environmental contractor umbrella insurance", "excess liability remediation", "pollution liability umbrella", "high limit liability environmental contractor", "catastrophic contamination insurance"],
  },
] as const;

export const LOCATIONS = [
  {
    slug: "gulf-coast-texas",
    name: "Gulf Coast & Texas",
    region: "TX · LA · MS · AL",
    blurb:
      "The densest petrochemical and refining corridor in North America. We insure Gulf Coast and Texas environmental contractors running soil and groundwater remediation, tank removal, and hazardous waste cleanup at refineries, chemical plants, and brownfield sites along the Gulf.",
  },
  {
    slug: "northeast-mid-atlantic",
    name: "Northeast & Mid-Atlantic",
    region: "NY · NJ · PA · New England",
    blurb:
      "Industrial legacy markets. Northeast and Mid-Atlantic environmental contractors handle brownfield redevelopment, Superfund cleanup, vapor intrusion, and historic industrial site remediation — coverage built for dense, regulated, old-industrial environments.",
  },
  {
    slug: "great-lakes-rust-belt",
    name: "Great Lakes & Rust Belt",
    region: "MI · OH · IL · IN · WI",
    blurb:
      "Rust Belt environmental contractors redeveloping shuttered steel, auto, and manufacturing sites. Coverage for heavy industrial demolition, contaminated soil removal, groundwater plume remediation, and the brownfield tax-credit redevelopment pipeline.",
  },
  {
    slug: "california-west-coast",
    name: "California & West Coast",
    region: "California",
    blurb:
      "The most stringent environmental regulation in the country. California environmental contractors face DTSC, RWQCB, and strict cleanup standards — coverage built for vapor intrusion, soil vapor extraction, and the state's demanding environmental and wildfire-debris environment.",
  },
  {
    slug: "southeast",
    name: "U.S. Southeast",
    region: "Florida · Georgia · Carolinas",
    blurb:
      "Southeast environmental contractors handling mold and water-damage remediation, hurricane-debris cleanup, coastal industrial sites, and leaking underground storage tanks — coverage for humid-climate mold, storm response, and high water-table work.",
  },
  {
    slug: "rocky-mountain",
    name: "Rocky Mountain",
    region: "Colorado · Utah · Idaho · Montana",
    blurb:
      "Rocky Mountain environmental contractors serving mining-legacy sites, oil and gas, and federal facility cleanup — coverage for hard-rock mining remediation, abandoned mine lands, and remote-site work across the Intermountain West.",
  },
  {
    slug: "pacific-northwest",
    name: "Pacific Northwest",
    region: "Oregon · Washington",
    blurb:
      "PNW environmental contractors handling timber and mill-site cleanup, fishery and water-quality work, and port and industrial waterfront remediation — coverage built for wet-climate, riparian, and contaminated-sediment environments.",
  },
  {
    slug: "southwest-desert",
    name: "Southwest & Desert",
    region: "Arizona · Nevada · New Mexico",
    blurb:
      "Southwest and desert environmental contractors serving mining, military, and dry-climate industrial sites — coverage for arid-site soil remediation, mine-scarred land, and the region's federal facility and tribal-land cleanup work.",
  },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Environmental market access", icon: "Leaf" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 450, suffix: "+", label: "Environmental crews insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring trades contractors", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

