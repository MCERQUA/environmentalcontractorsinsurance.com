// Rich, niche-accurate content blocks for Environmental Contractor Insurance.

import {
  PhoneCall, FileSearch, FileSignature, ShieldCheck,
  Building2, Truck, HardHat, Wrench,
} from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

/* ============================================================
   PROCESS — how getting insured with us works
   ============================================================ */
export const PROCESS = [
  {
    step: "01",
    icon: PhoneCall,
    title: "Tell us about your remediation operation",
    description:
      "15-min call or form. Crew size, abatement vs. soil/groundwater vs. tank removal, annual revenue, certs you owe GCs and government clients, and the lines your old carrier excluded.",
  },
  {
    step: "02",
    icon: FileSearch,
    title: "We shop environmental specialty markets",
    description:
      "Markets that actually write environmental contractors and CPL — not generic carriers that deny pollution claims and exclude asbestos, mold, and hazardous waste work.",
  },
  {
    step: "03",
    icon: FileSignature,
    title: "Bind a program built for remediation",
    description:
      "CPL + GL (written around the pollution exclusion) + workers' comp + professional + auto + mobile equipment, coordinated so there are no gaps when a pollution condition or claim happens.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Certificates & claims that move fast",
    description:
      "When a refinery needs an additional-insured certificate with pollution extension before you mobilize, or a release happens on site, you reach a person with context — not a queue. 2-hour response.",
  },
] as const;

/* ============================================================
   WHY CHOOSE US
   ============================================================ */
export const WHY_CHOOSE = [
  {
    icon: ShieldCheck,
    title: "True CPL — not a worthless endorsement",
    description:
      "Many brokers sell a cheap 'pollution extension' that denies the very claims environmental contractors face. We place real Contractors Pollution Liability that covers asbestos, mold, lead, contaminated soil and groundwater, and hazardous waste — your operations and completed work.",
  },
  {
    icon: HardHat,
    title: "Workers' comp coded to abatement class codes",
    description:
      "Asbestos, mold, and lead abatement crews get mis-classed constantly as generic construction. We assign the correct abatement class codes and document your respirator and exposure-control program so your rate reflects your real — not worst-case — exposure.",
  },
  {
    icon: Building2,
    title: "Coverage the GC, refinery, and government will accept",
    description:
      "Refineries, developers, and federal/state agencies require specific additional-insured status, pollution extensions, and high limits before you mobilize. We place coverage that meets those requirements and turn certificates around in minutes.",
  },
  {
    icon: Wrench,
    title: "Mobile equipment that travels with your crew",
    description:
      "Excavators, frac tanks, HEPA vacuums, air monitors, and confined-space gear move between sites daily. We schedule your equipment at replacement cost so theft, overturn, and transit damage don't come out of your pocket.",
  },
  {
    icon: Truck,
    title: "Vacuum trucks, tankers & roll-offs rated right",
    description:
      "Hauling contaminated soil, liquids, and waste is a specialty auto exposure. We rate your vacuum trucks, tanker trucks, and roll-offs for the actual hazardous-material hauling — not a generic pickup-truck policy that will deny the claim.",
  },
  {
    icon: HardHat,
    title: "Run by people who know the work",
    description:
      "Josh Cotner and the CCA team know how environmental operations run and exactly what happens when coverage fails at claim time. You'll never have to explain a 'pollution condition' or a decon line to us.",
  },
] as const;

/* ============================================================
   HOMEPAGE FAQ — 20 questions
   ============================================================ */
export const HOME_FAQS: FAQItem[] = [
  {
    q: "What kind of insurance does an environmental contractor need?",
    a: "An environmental contractor needs a bundle built around the pollution exposure: Contractors Pollution Liability (CPL) — the core policy, because standard GL excludes pollution — plus general liability written to coordinate with CPL, workers' compensation with correct abatement class codes, professional liability/E&O for design and sampling, commercial auto for vacuum and tanker trucks, mobile equipment coverage for excavators and frac tanks, commercial property, and an umbrella/excess policy for catastrophic contamination losses. Most also need contractor license and surety bonds.",
  },
  {
    q: "Why does general liability exclude pollution for environmental contractors?",
    a: "Standard ISO general liability forms (the CG 00 01) contain a builtin Pollution Exclusion that removes coverage for bodily injury, property damage, and cleanup costs arising from pollutants — which is exactly the exposure environmental remediation contractors create. The only way to close that gap is a separate Contractors Pollution Liability (CPL) policy. Many budget brokers sell a cheap 'pollution endorsement' that still denies the claim; we place real CPL.",
  },
  {
    q: "What is Contractors Pollution Liability (CPL) insurance?",
    a: "CPL covers third-party bodily injury, property damage, and cleanup costs arising from a pollution condition caused by your contracting operations — asbestos, mold, lead, contaminated soil, groundwater plumes, and hazardous waste. It can be written on a claims-made or occurrence basis, covers your completed work as well as ongoing operations, and is the single most important policy an environmental contractor carries.",
  },
  {
    q: "How much does environmental contractor insurance cost?",
    a: "Most environmental contractors pay between $3,500 and $12,000 a year for a $1M/$2M general liability program, plus a CPL policy that typically runs $2,500–$15,000+ depending on operations, limits, and whether the work is asbestos/mold/lead abatement, soil and groundwater remediation, or tank removal. Workers' comp is rated on payroll by abatement class code. We quote the whole program in about 15 minutes and show every market's price side by side.",
  },
  {
    q: "What workers' comp class codes apply to environmental contractors?",
    a: "It depends on the work. Asbestos abatement typically falls under class code 5473 or its state equivalent, lead abatement under codes like 5474 or 5403 with a lead endorsement, mold remediation often under 5403 carpentry or a specialty mold code, and hazmat handlers under codes like 5473, 6232, or 9015 depending on the operation. Correct classification matters — wrong codes mean overpaying on premium or, worse, an audit bill and denied claim.",
  },
  {
    q: "Does my policy cover a pollution release on a jobsite?",
    a: "Only a true Contractors Pollution Liability policy does — your standard GL will deny the pollution claim under the Pollution Exclusion, and most property and auto policies exclude contamination too. We structure your program so a pollution condition (a spill, a disturbed asbestos fiber release, a groundwater plume migration) is covered for cleanup, bodily injury, property damage, and defense.",
  },
  {
    q: "Do I need professional liability if I'm a remediation contractor?",
    a: "If you provide any design, assessment, sampling, monitoring, or consulting — even as part of a remediation contract — yes. A mistake in a remediation design, a missed contaminant in sampling, or a faulty site assessment can cause a financial loss that neither GL nor CPL will cover. Professional liability (E&O) closes that gap.",
  },
  {
    q: "Are my vacuum trucks and tankers covered by commercial auto?",
    a: "They should be, but only if the policy is rated for hazardous-material hauling and the real vehicle use. A generic contractor auto policy may deny a claim involving a contaminated load. We rate vacuum trucks, tanker trucks, roll-offs, and super-suckers for the actual remediation hauling exposure.",
  },
  {
    q: "Can you get me a certificate of insurance with pollution coverage today?",
    a: "Yes. Once your program is bound we turn around additional-insured certificates — including pollution extensions, waivers of subrogation, and primary/non-contributory language — usually within minutes. We know refineries, developers, and government clients won't let you mobilize without proof of pollution coverage.",
  },
  {
    q: "What happens if contaminated soil or waste is spilled in transit?",
    a: "A release during transport is a pollution claim, and cleanup can be enormous. Coverage depends on the right combination: a CPL policy that extends to transportation, commercial auto rated for hazmat hauling, and a motor truck cargo / pollution policy for the load itself. We structure all three so a transit release is covered.",
  },
  {
    q: "Do you insure environmental contractors in all 50 states?",
    a: "Yes. Contractors Choice Agency is licensed in all 50 states and writes environmental and remediation contractors from the Gulf Coast petrochemical corridor to the Rust Belt, California, and the Northeast industrial legacy markets.",
  },
  {
    q: "How fast can I get a quote?",
    a: "Typically 15 minutes on a call for a standard program. Complex operations — Superfund cleanup, heavy soil and groundwater remediation, large tank-removal projects — may take a day or two to place with the right markets, but we move fast and tell you the timeline up front.",
  },
  {
    q: "What limits do environmental contractors typically carry?",
    a: "Most carry $1M per occurrence / $2M general aggregate for GL, a matching $1M/$2M (or higher) CPL policy, and a $2M–$5M umbrella. Refineries, Superfund prime contractors, and government clients often require $5M or $10M combined limits plus additional-insured status with pollution extension. We size limits to what your contracts actually demand.",
  },
  {
    q: "Does CPL cover my completed remediation work?",
    a: "It can and should. A properly written CPL covers claims arising from your completed operations — not just ongoing work — which matters because pollution conditions (a missed contaminant, a migrating plume, a failed cleanup) often surface years after a project closes. We write CPL on an extended-reporting or occurrence basis to cover completed work.",
  },
  {
    q: "Do I need separate insurance for asbestos, mold, and lead abatement?",
    a: "Not separate policies, but correct coverage. Asbestos, mold, and lead abatement are specialty environmental operations with their own class codes, exposure profiles, and licensing. We build a single coordinated program (CPL + GL + workers' comp with the right abatement codes) that covers all your abatement work without gaps.",
  },
  {
    q: "Are my excavators, frac tanks, and HEPA vacuums covered off-site?",
    a: "General liability and property do not cover mobile equipment at a jobsite. Mobile and specialty equipment is an inland marine coverage. We schedule excavators, frac tanks, HEPA vacuums, air monitors, negative-air machines, and confined-space gear at replacement cost so theft, overturn, and transit damage are covered wherever the equipment goes.",
  },
  {
    q: "Can you insure environmental contractors with prior claims or tough exposures?",
    a: "Often, yes. If you've had a pollution claim, a release, a cancellation, or been declined, we have excess-and-surplus (E&S) environmental markets for contractors other brokers won't touch. Bring your loss runs and we'll find a path.",
  },
  {
    q: "What is additional insured status and why do GCs and refineries want it?",
    a: "Additional insured status extends your liability coverage (including pollution, where written) to the GC, refinery, developer, or government client for your operations. They require it — along with a waiver of subrogation and primary/non-contributory endorsement — so that if a claim arises from your work, your policy responds first. We issue these endorsements routinely, often with the pollution extension attached.",
  },
  {
    q: "How are environmental insurance premiums calculated?",
    a: "GL is usually rated on payroll or subcontractor cost; CPL on contract revenue, project type, and limits; workers' comp on payroll by abatement class code; professional on fees; mobile equipment on scheduled value; auto on vehicles, drivers, and hazmat hauling. We document your operation accurately so you're rated on real exposure, not a worst-case guess.",
  },
  {
    q: "Why use a specialty environmental insurance broker?",
    a: "Environmental remediation is a pollution-exposure business that generic small-business carriers routinely exclude, deny, or misprice. A specialty broker knows the abatement class codes, the markets that write CPL, how to coordinate GL with the pollution exclusion, and how to manage a pollution or hazmat claim — which means real coverage at a fairer price.",
  },
];

/* ============================================================
   GENERAL FAQs — reused as the tail on service & location pages
   so every page carries 20 FAQs (composed via buildPageFaqs)
   ============================================================ */
export const GENERAL_FAQS: FAQItem[] = [
  {
    q: "How much does this coverage cost for an environmental contractor?",
    a: "Most environmental contractors pay $3,500–$12,000 a year for $1M/$2M general liability, plus a CPL policy from $2,500–$15,000+, with workers' comp rated on payroll by abatement class code. We quote the full program in about 15 minutes and show every market's price.",
  },
  {
    q: "Do you insure environmental contractors in all 50 states?",
    a: "Yes. Contractors Choice Agency is licensed in all 50 states and writes remediation and abatement crews from the Gulf Coast and Texas to the Rust Belt, California, and the Northeast.",
  },
  {
    q: "How fast can I get a quote and a certificate?",
    a: "About 15 minutes for a standard program. Once bound, we turn around additional-insured certificates — including pollution extensions, waivers of subrogation, and primary/non-contributory endorsements — usually within minutes.",
  },
  {
    q: "Why does standard general liability exclude pollution?",
    a: "The ISO general liability form contains a builtin Pollution Exclusion that removes coverage for bodily injury, property damage, and cleanup arising from pollutants. The only way to cover the pollution exposure is a separate Contractors Pollution Liability (CPL) policy — which is why CPL is the core policy for environmental contractors.",
  },
  {
    q: "What workers' comp class codes apply to abatement work?",
    a: "Asbestos abatement is typically class 5473, lead abatement around 5474 or 5403 with lead endorsement, mold remediation often 5403 or a specialty mold code, and hazmat handlers under codes like 6232 or 9015. Correct classification keeps you from overpaying or facing an audit surprise — and ensures claims aren't denied for misclassification.",
  },
  {
    q: "Are my excavators and frac tanks covered on the jobsite?",
    a: "Mobile and specialty equipment is covered under an inland marine (mobile equipment) policy, not GL or property. We schedule excavators, frac tanks, HEPA vacuums, air monitors, and confined-space gear at replacement cost so jobsite, transit, and overturn damage are covered.",
  },
  {
    q: "What limits should an environmental contractor carry?",
    a: "Most carry $1M/$2M GL with a matching $1M/$2M CPL policy and a $2M–$5M umbrella. Refineries, Superfund primes, and government clients often require $5M–$10M combined limits plus additional-insured status with pollution extension. We size limits to your actual contract requirements.",
  },
  {
    q: "Do I need commercial auto for my vacuum and tanker trucks?",
    a: "Yes — and it must be rated for hazardous-material hauling. A generic contractor auto policy may deny a claim involving a contaminated load. We rate vacuum trucks, tankers, roll-offs, and super-suckers for the real remediation hauling exposure.",
  },
  {
    q: "Can you cover environmental contractors with prior claims or cancellations?",
    a: "Often, yes. We have excess-and-surplus (E&S) environmental markets for contractors with loss runs, releases, cancellations, or tough exposures that standard markets decline.",
  },
  {
    q: "How do you handle subcontracted remediation work?",
    a: "Your GL and CPL don't cover independent subs — they should carry their own environmental coverage and name you additional insured. We set up certificate tracking and additional-insured requirements so subcontracted work doesn't become your liability or your pollution exposure.",
  },
  {
    q: "What happens if there's a pollution claim or release?",
    a: "You reach a person with context, not a queue. We respond within 2 hours, help you document the pollution condition, coordinate cleanup and defense with the carrier, and manage the claim so it's paid correctly and your operation keeps moving.",
  },
  {
    q: "Why use a specialty environmental insurance broker?",
    a: "Environmental work has pollution, hazmat, and professional exposures that generic carriers exclude or misprice. A specialty broker knows the abatement class codes, the markets that write CPL, how to coordinate GL with the pollution exclusion, and how to manage a pollution claim.",
  },
];

/** Compose a 20-item FAQ list for any page: specific FAQs first, then general fill. */
export function buildPageFaqs(specific: FAQItem[], count = 20): FAQItem[] {
  const seen = new Set<string>();
  const out: FAQItem[] = [];
  for (const f of [...specific, ...GENERAL_FAQS]) {
    const key = f.q.toLowerCase().slice(0, 60);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(f);
    if (out.length >= count) break;
  }
  return out;
}

/* ============================================================
   LOCATION FAQ EXTRAS — composed with GENERAL_FAQS on location pages
   ============================================================ */
export const LOCATION_FAQ_BASE: FAQItem[] = [
  {
    q: "Are you licensed to insure environmental contractors in this region?",
    a: "Yes. Contractors Choice Agency is licensed in all 50 states, so we can bind and service environmental and remediation contractor coverage in this region and coordinate certificates for cleanup work that crosses state lines.",
  },
  {
    q: "Do regional industrial and regulatory environments affect my coverage?",
    a: "They do. Refinery density, brownfield inventory, Superfund sites, state cleanup standards, and federal facility work all shape both how you operate and how the risk is underwritten. We account for the region's industrial and regulatory environment when structuring your program.",
  },
  {
    q: "Can you meet local refinery, GC, and government insurance requirements here?",
    a: "Yes. We routinely issue the additional-insured status, pollution extensions, waivers of subrogation, and primary/non-contributory endorsements that refineries, GCs, developers, and state and federal agencies require before you mobilize.",
  },
  {
    q: "Do you handle emergency response and storm work in this market?",
    a: "We do. Environmental contractors get pulled into emergency releases, hurricane debris, and disaster response with little notice. We can structure coverage that responds to emergency and project work and adjust limits for short-notice mobilization.",
  },
  {
    q: "How do hazardous-material and waste exposures affect my premium here?",
    a: "The type of contamination, the disposal pathway, the site history, and the region's carrier appetite all affect CPL, property, and auto pricing. We shop environmental markets that write your region and structure limits and deductibles so you're protected without overpaying.",
  },
  {
    q: "Can you add a project-specific CPL or pollution policy for a local cleanup?",
    a: "Yes. For larger, higher-hazard, or unusual local projects we can write a project-specific CPL or pollution policy that covers that cleanup in addition to your ongoing program — often required by the project owner or agency.",
  },
  {
    q: "Do you provide certificates to local agencies, refineries, and GCs?",
    a: "Yes. We supply the certificates of insurance — with pollution extensions, additional-insured status, and license bonds — that local building departments, refineries, developers, and state and federal agencies require, turned around fast.",
  },
  {
    q: "Who services my policy if my crew works across multiple regions?",
    a: "We do — coast to coast. Because we're licensed everywhere, a single program can follow your crews across regional lines, with one point of contact for certificates, endorsements, and claims.",
  },
];

/* ============================================================
   SERVICE DETAIL — per-service editorial content
   ============================================================ */
export interface ServiceDetail {
  heroBlurb: string;
  whatsCovered: string[];
  whoItsFor: string[];
  whyCca: string[];
  faqs: FAQItem[];
}

export const SERVICE_DETAIL: Record<string, ServiceDetail> = {
  "pollution-liability": {
    heroBlurb:
      "Coverage for pollution conditions arising from your remediation and abatement operations — asbestos, mold, lead, contaminated soil and groundwater, and hazardous waste — the exact exposure that standard general liability excludes. The essential, core policy every environmental contractor must carry.",
    whatsCovered: [
      "Third-party bodily injury from a pollution condition you cause",
      "Property damage from contamination you disturb, transport, or spread",
      "On-site and off-site cleanup and remediation costs",
      "Defense costs and legal fees for pollution claims and suits",
      "Coverage for ongoing operations AND completed work",
      "Transportation and disposal pollution extensions (optional)",
    ],
    whoItsFor: [
      "Asbestos, mold, and lead abatement contractors",
      "Soil and groundwater remediation contractors",
      "Underground storage tank removal contractors",
      "Hazardous waste site and Superfund cleanup crews",
      "Any environmental contractor whose standard GL excludes pollution",
    ],
    whyCca: [
      "True CPL — not the worthless 'pollution endorsement' budget brokers sell",
      "Coverage for completed work, not just ongoing operations",
      "Limits and extensions refinery, GC, and government clients will accept",
    ],
    faqs: [
      {
        q: "What does Contractors Pollution Liability (CPL) cover?",
        a: "CPL covers third-party bodily injury, property damage, and cleanup costs arising from a pollution condition caused by your contracting operations — asbestos fiber release, mold disturbance, lead contamination, contaminated soil and groundwater, and hazardous waste. It covers your ongoing operations and your completed work, and pays defense costs on top of the limits.",
      },
      {
        q: "Why is CPL the core policy for environmental contractors?",
        a: "Because standard general liability carries a builtin Pollution Exclusion that removes pollution coverage entirely. Environmental remediation is by definition a pollution-exposure business, so the only way to insure your actual operations is a separate CPL policy. Without it, the very claims your work creates would be denied.",
      },
      {
        q: "What's the difference between CPL and a 'pollution endorsement' on GL?",
        a: "Most GL pollution endorsements are severely limited — they cover only a narrow list of pollutants, exclude your work, cap at low limits, or apply only on your premises. A standalone CPL policy is broad, covers your operations and completed work, and pays the real cleanup and defense costs. We place real CPL because the endorsement route routinely denies claims.",
      },
      {
        q: "Is CPL claims-made or occurrence?",
        a: "CPL can be written either way. Claims-made covers claims reported during the policy period (with a retroactive date); occurrence covers any claim arising from an event during the policy period regardless of when it's reported. We help you choose the right form and, on claims-made, secure an extended reporting (tail) endorsement when you renew or move markets.",
      },
      {
        q: "Does CPL cover a release that happens after the project is finished?",
        a: "A properly written CPL does. Pollution conditions — a missed contaminant, a migrating groundwater plume, a failed cleanup — often surface years after a project closes. We write CPL that covers your completed operations, not just work in progress, and structure the reporting form so legacy claims are covered.",
      },
      {
        q: "What limits should an environmental contractor carry for CPL?",
        a: "Most carry $1M per occurrence / $2M aggregate, matching their GL. Refineries, Superfund primes, and government clients often require $5M or $10M in pollution limits — we add an umbrella or a higher-layer CPL to reach them. Cleanup costs alone can run into the millions, so we model your realistic worst case.",
      },
      {
        q: "How is CPL premium calculated?",
        a: "CPL is typically rated on contract revenue or project cost, with factors for the type of work (abatement vs. soil/groundwater vs. tank removal), the limits and deductible, the region, and your claims history. Higher-hazard work and higher limits cost more. We document your operation accurately so you're priced on real exposure.",
      },
      {
        q: "Does CPL cover transportation and disposal of contaminated waste?",
        a: "It can, with the right endorsement. A release during transport or at a disposal facility is a major exposure for environmental contractors. We extend CPL to cover loading, transportation, and disposal — and pair it with a hazmat-rated commercial auto and cargo pollution policy so the full chain is covered.",
      },
    ],
  },
  "general-liability": {
    heroBlurb:
      "Third-party bodily injury and property damage protection for your remediation crews and jobsites — including products-completed operations and the additional-insured certificates that get you onto the refinery, GC, or government project. Coordinated with CPL because standard GL excludes pollution.",
    whatsCovered: [
      "Bodily injury to visitors, other trades, and the public on your jobsite",
      "Property damage caused by your remediation operations (non-pollution)",
      "Products-completed operations for work you've finished",
      "Defense costs and legal fees when you're named in a lawsuit",
      "Additional-insured status for refineries, GCs, and government clients",
      "Fire damage and limited coverage for property in your care",
    ],
    whoItsFor: [
      "Environmental remediation and abatement contractors",
      "Subcontracted environmental crews on industrial and federal sites",
      "Demolition contractors handling contaminated structures",
      "Any environmental contractor whose clients require GL certificates",
    ],
    whyCca: [
      "GL placed to coordinate cleanly with your CPL — no coverage gaps",
      "Additional-insured and pollution-extension endorsements issued fast",
      "Limits scaled to what refineries, GCs, and agencies actually require",
    ],
    faqs: [
      {
        q: "What does general liability cover for an environmental contractor?",
        a: "GL covers third-party bodily injury and property damage caused by your operations that is NOT a pollution condition — a visitor slipping on your site, damage you cause to adjacent property, or a completed-operations claim. It does not cover pollution (that's CPL), your own injuries (workers' comp), or your equipment (inland marine).",
      },
      {
        q: "Why doesn't GL cover the pollution exposure?",
        a: "The standard ISO general liability form includes a Pollution Exclusion that removes coverage for bodily injury, property damage, and cleanup arising from pollutants. Because environmental contractors work in pollution by definition, GL alone leaves your core exposure uninsured — which is exactly why CPL is the essential companion policy.",
      },
      {
        q: "What's the relationship between GL and CPL?",
        a: "GL covers non-pollution third-party claims; CPL covers pollution claims. They're coordinated so that every type of claim your operations create has a responding policy. We bind both together, structure limits to match, and issue the additional-insured and pollution-extension endorsements your clients require.",
      },
      {
        q: "Why do refineries and government clients require me to add them as additional insured?",
        a: "Additional-insured status extends your GL (and where written, CPL) to the refinery, GC, developer, or agency for your operations — so if a claim arises from your work, your policy responds first. It's a standard contract requirement, paired with a waiver of subrogation and primary/non-contributory language. We issue these routinely.",
      },
      {
        q: "Does GL cover a claim from a subcontractor's work?",
        a: "Your GL can be pulled into a claim arising from an independent subcontractor's work, which is why certificate tracking matters. True independent subs should carry their own GL and CPL and name you additional insured. We help you set up the certificate and additional-insured requirements that protect you.",
      },
      {
        q: "What GL limits do environmental contractors need?",
        a: "Most carry $1M per occurrence / $2M general aggregate. Refineries, Superfund primes, and government clients often require $2M or $5M limits — we add an umbrella to reach them. We size limits to what your contracts actually demand.",
      },
      {
        q: "How is environmental contractor GL premium calculated?",
        a: "GL is usually rated on payroll and subcontractor cost, sometimes on revenue. The operation type, region, and claims history all factor in. Accurate classification and documented loss control keep the premium fair. We document your real operation so you're not rated on a worst-case guess.",
      },
      {
        q: "Do I need GL if I already have CPL?",
        a: "Yes — both. GL covers non-pollution third-party claims (slip-and-fall, property damage, completed operations); CPL covers pollution claims. Dropping either leaves a real gap. We bind a coordinated GL + CPL program so every claim has a responding policy.",
      },
    ],
  },
  "professional-liability": {
    heroBlurb:
      "Errors & omissions coverage for the professional services environmental contractors provide — remediation design, site assessment, sampling and analysis, monitoring, and consulting — protection for the financial cost of a design or advisory error that a pollution or GL policy will not cover.",
    whatsCovered: [
      "Financial loss from errors in remediation design or approach",
      "Site assessment and sampling errors and omissions",
      "Missed contaminants or faulty analytical interpretation",
      "Monitoring, reporting, and documentation mistakes",
      "Defense costs for professional negligence claims",
      "Coverage for consulting and advisory services",
    ],
    whoItsFor: [
      "Environmental contractors who design remediation systems",
      "Crews that perform site assessment, sampling, and monitoring",
      "Environmental consultants and engineers",
      "Contractors whose scope includes reporting and certifications",
    ],
    whyCca: [
      "Coverage for the professional services GL and CPL exclude",
      "Limits matched to your contract and certification exposure",
      "Claims-made forms written with the right retroactive date",
    ],
    faqs: [
      {
        q: "What does professional liability cover for environmental contractors?",
        a: "Professional liability (E&O) covers the financial cost of an error or omission in the professional services you provide — a flawed remediation design, a missed contaminant in sampling, a faulty site assessment, or a reporting mistake. It pays the client's financial loss and your defense costs.",
      },
      {
        q: "Why isn't professional liability covered by GL or CPL?",
        a: "GL covers bodily injury and property damage, and CPL covers pollution conditions — but neither covers pure financial loss from a professional error. If your remediation design fails to meet cleanup standards and the client sues for the cost of redoing the work, that's an E&O claim that only professional liability will cover.",
      },
      {
        q: "Do remediation contractors really need professional liability?",
        a: "If your scope includes any design, assessment, sampling, monitoring, or consulting — even embedded in a remediation contract — yes. Many environmental contracts bundle professional services with the physical work, and a mistake in the professional component can cause a major financial loss that no other policy covers.",
      },
      {
        q: "Is professional liability claims-made or occurrence?",
        a: "Professional liability is almost always written on a claims-made basis, meaning the claim must be reported during the policy period. We secure the right retroactive date (covering prior acts) and an extended reporting (tail) endorsement when you renew or move markets, so coverage stays continuous.",
      },
      {
        q: "What limits should I carry for professional liability?",
        a: "Most environmental contractors carry $1M per claim / $1M or $2M aggregate, matched to their contract requirements and the financial size of their design and assessment work. Larger remediation design and federal projects often require $2M–$5M. We size limits to your scope and your clients' requirements.",
      },
      {
        q: "Does professional liability cover pollution claims?",
        a: "No — pollution conditions are covered by CPL. Professional liability covers the financial loss from an error in your professional services, not the underlying pollution cleanup or bodily injury. The two work together: CPL for the pollution, E&O for the design or advisory mistake.",
      },
      {
        q: "How is professional liability premium calculated?",
        a: "Premium is based on your professional fees (design, assessment, consulting revenue), the type of services, limits and deductible, and your claims history. Higher-risk design work and higher limits cost more. We document your professional scope accurately so the price reflects real exposure.",
      },
      {
        q: "Can I bundle professional liability with my GL and CPL?",
        a: "Some specialty environmental markets write a combined GL/CPL/E&O policy or offer them as a coordinated package with one carrier. Where that's the best value and cleanest coverage, we place it; otherwise we coordinate separate policies from the best markets for each line.",
      },
    ],
  },
  "workers-compensation": {
    heroBlurb:
      "Coverage for the injury and exposure patterns unique to environmental crews — asbestos, mold, and lead abatement class codes, hazmat handlers, chemical and biological exposure, heat and confined-space injury — with correct classification so you're not overpaying or underinsured.",
    whatsCovered: [
      "Medical treatment for on-the-job injuries and exposures",
      "Disability and lost-wage benefits for injured crew members",
      "Asbestos, mold, and lead exposure and disease claims",
      "Chemical, biological, and hazardous-material exposure",
      "Confined-space, heat, and struck-by injuries",
      "Employers' liability (Part Two) protection",
    ],
    whoItsFor: [
      "Environmental contractors with W-2 employees",
      "Asbestos, mold, and lead abatement crews",
      "Hazmat handlers and site cleanup workers",
      "Any environmental contractor required by state law to carry workers' comp",
    ],
    whyCca: [
      "Correct abatement class codes — not generic construction codes",
      "Respirator and exposure-control documentation that supports better rates",
      "Aggressive claims management to protect your experience modifier",
    ],
    faqs: [
      {
        q: "What workers' comp class codes apply to environmental contractors?",
        a: "It depends on the work. Asbestos abatement is typically class 5473, lead abatement around 5474 or 5403 with a lead endorsement, mold remediation often 5403 or a specialty mold code, and hazmat handlers under codes like 6232 or 9015. We assign the correct codes for your operation so premium is fair and claims aren't denied.",
      },
      {
        q: "How much is workers' comp for an environmental contractor?",
        a: "Workers' comp is rated on payroll by class code. Abatement and hazmat codes carry higher rates than office work because of the exposure, disease, and confined-space risks, but good loss control, a documented respirator program, and a clean experience modifier meaningfully reduce cost. We quote based on your actual payroll and history.",
      },
      {
        q: "Does workers' comp cover asbestos, mold, and lead disease claims?",
        a: "It covers occupational disease arising from your work exposure, subject to the state's workers' comp law and the disease provisions of the policy. Latent disease claims (like asbestos-related conditions surfacing years later) can be complex; we help structure the coverage and the documentation so the claim is handled correctly.",
      },
      {
        q: "Do owner-operators need to carry workers' comp on themselves?",
        a: "It depends on your state and business structure. Many states exempt sole proprietors and single-member LLC owners, but you can elect coverage, and if you have any W-2 employees you must carry it. We'll tell you exactly what your state requires.",
      },
      {
        q: "How do you handle confined-space and heat claims?",
        a: "Confined-space entry and heat illness are serious environmental-contractor exposures. We respond within 2 hours, make sure the injured worker gets care fast, and manage the claim with the carrier to control cost and get the crew member back to work. Good handling protects both the worker and your modifier.",
      },
      {
        q: "What if my crew works in multiple states?",
        a: "Workers' comp follows where the work is performed, and each state has its own rules and rates. Because we're licensed in all 50 states, we structure a program that covers your crews across state lines without gaps.",
      },
      {
        q: "Are 1099 subcontractors covered under my workers' comp?",
        a: "Generally no — true independent contractors carry their own. But many states apply a 'statutory employee' test, and misclassifying W-2 workers as 1099 can leave you liable. We help you classify workers correctly and document it.",
      },
      {
        q: "How do audits work for environmental workers' comp?",
        a: "At policy end, the carrier audits your actual payroll by class code and true-ups the premium. If your payroll was underreported you'll owe more; if overreported, you'll get a return. We help you classify payroll correctly up front to avoid audit shock.",
      },
    ],
  },
  "commercial-auto": {
    heroBlurb:
      "Coverage for the vacuum trucks, tanker trucks, roll-off haulers, and super-suckers that move your crew, contaminated soil, liquids, and equipment between remediation sites and disposal facilities — including hired/non-owned and loading liability.",
    whatsCovered: [
      "Liability for at-fault accidents in vacuum trucks, tankers, and roll-offs",
      "Physical damage (comprehensive & collision) to owned vehicles",
      "Hazardous-material hauling exposure rated correctly",
      "Hired and non-owned auto for employees driving their own trucks",
      "Uninsured and underinsured motorist coverage",
      "Loading and unloading liability",
    ],
    whoItsFor: [
      "Environmental contractors with vacuum trucks or tankers",
      "Crews hauling contaminated soil, liquids, and waste",
      "Operations whose employees drive personal trucks for work",
      "Any contractor whose generic auto policy would deny a hazmat claim",
    ],
    whyCca: [
      "Hazmat hauling rated correctly — not a generic pickup policy",
      "Vacuum truck, tanker, and roll-off exposure factored in",
      "Fleet and single-vehicle programs available",
    ],
    faqs: [
      {
        q: "Why can't I use a standard contractor auto policy for my vacuum truck?",
        a: "Standard contractor auto policies are rated for pickups and service trucks, not vacuum trucks, tankers, and roll-offs hauling contaminated loads. A hazmat-related claim can be denied if the policy isn't rated for the real vehicle use and cargo. We rate your trucks for the actual remediation hauling exposure.",
      },
      {
        q: "Does commercial auto cover the contaminated load in my tank?",
        a: "Liability for an at-fault crash is covered, but the cargo (contaminated soil, liquids, waste) generally is not — that's a motor truck cargo and pollution matter. We pair the auto policy with a cargo/pollution extension or CPL transportation coverage so a transit release is fully covered.",
      },
      {
        q: "What is hired and non-owned auto, and do environmental contractors need it?",
        a: "Hired auto covers rental vehicles; non-owned auto covers employees driving their own personal vehicles for your business. If any crew member runs samples, parts, or equipment in their own truck, you want non-owned coverage — it protects your business when their personal policy falls short.",
      },
      {
        q: "Do I need special coverage to haul hazardous waste?",
        a: "Yes. Hauling hazardous waste is a specialty exposure that requires hazmat-rated auto coverage and often a separate pollution/cargo policy for the load itself. Depending on the material and the route you may also need EPA/dot-compliant filings. We structure the full chain so a transit release is covered.",
      },
      {
        q: "How is commercial auto rated for environmental contractors?",
        a: "Premium is based on the vehicles (type, value, use — vacuum truck vs. tanker vs. roll-off), drivers (records and experience), cargo (including hazmat), and radius of operation. Clean driving records, accurate vehicle scheduling, and correct use classification keep the cost down.",
      },
      {
        q: "What if an employee gets in an accident hauling contaminated soil?",
        a: "Commercial auto covers at-fault liability and physical damage for company vehicles, and we coordinate with the cargo/pollution coverage for the load. We respond fast, coordinate the claim, and get the truck repaired or replaced so the crew keeps moving.",
      },
      {
        q: "Do you insure environmental fleets or just single trucks?",
        a: "Both. Whether you run a single vacuum truck or a fleet of tankers, roll-offs, and super-suckers, we structure a commercial auto program that covers every vehicle, driver, and load.",
      },
      {
        q: "Does commercial auto cover loading and unloading at the disposal site?",
        a: "Many policies include some loading/unloading liability, but the contaminated cargo itself is a pollution/cargo matter. We make sure the liability gap is closed and pair the auto policy with cargo and pollution coverage for the full disposal chain.",
      },
    ],
  },
  "commercial-property": {
    heroBlurb:
      "All-risk commercial property coverage for the environmental contractor's yard, equipment decontamination facility, office, and storage — built for the specialized equipment, hazardous-material handling, and environmental exposures of a remediation operation.",
    whatsCovered: [
      "Yard, office, and decontamination facility buildings",
      "Specialized remediation equipment at the fixed location",
      "Hazardous-material and contaminated-gear storage",
      "Office equipment, records, and reporting systems",
      "Equipment breakdown for shop machinery and compressors",
      "Business interruption during restoration",
    ],
    whoItsFor: [
      "Environmental contractors with a yard, shop, or decon facility",
      "Operations storing contaminated gear and decon equipment",
      "Remediation contractors with a fixed office and storage",
      "Any environmental contractor whose business depends on a fixed location",
    ],
    whyCca: [
      "Hazardous-material and decon exposures priced correctly",
      "Equipment and facility at replacement cost",
      "Business interruption with adequate restoration period",
    ],
    faqs: [
      {
        q: "What does commercial property cover for an environmental contractor?",
        a: "It covers your yard, decon facility, office, and storage buildings against fire, theft, wind, and other covered perils — the fixed-location assets your business depends on, including specialized decontamination and remediation equipment stored there.",
      },
      {
        q: "Does commercial property cover contaminated-gear storage?",
        a: "It can, with the right structuring. Storing contaminated suits, respirators, and decon equipment is a specialty exposure that needs to be disclosed and priced. We document your storage and handling practices and structure the policy so the facility and contents are covered.",
      },
      {
        q: "Will a property policy cover my decontamination facility?",
        a: "Yes, and we tailor it — a decon facility with showers, HEPA filtration, and contamination controls is a specialized building. We schedule the facility and its systems at replacement cost and include equipment breakdown for the compressors and filtration machinery.",
      },
      {
        q: "Why does hazardous-material handling matter for my property?",
        a: "Handling hazardous material on site is a higher exposure than a typical office, and that affects underwriting and pricing. We document your storage, ventilation, and spill-response program to get the best terms and make sure the policy responds at claim time.",
      },
      {
        q: "Is equipment breakdown included?",
        a: "It can be. Equipment breakdown covers internal mechanical and electrical failures of compressors, HEPA systems, decon equipment, and shop machinery that standard property excludes. We include it for operations with significant fixed equipment.",
      },
      {
        q: "Does property cover business interruption if my facility burns?",
        a: "Business interruption coverage pays your lost income and ongoing expenses during restoration. For an environmental business that depends on a decon facility or yard, that can mean the difference between surviving a fire and closing. We size the restoration period to your real recovery time.",
      },
      {
        q: "Replacement cost or actual cash value for my property?",
        a: "We recommend replacement cost so a loss restores your facility and equipment new, not depreciated. For specialized decon and remediation equipment, ACV can leave you dramatically underinsured.",
      },
      {
        q: "How is commercial property rated for environmental contractors?",
        a: "Premium reflects construction type, protection (sprinklers, alarms, ventilation), occupancy, the hazardous-material handling, and equipment value. Good housekeeping and documented spill-response programs improve both terms and price.",
      },
    ],
  },
  "inland-marine-equipment": {
    heroBlurb:
      "Scheduled coverage for the heavy mobile equipment and specialty gear remediation contractors depend on — excavators, frac tanks, HEPA vacuums, air monitors, confined-space gear, and trailers — that travels between jobsites and follows the equipment wherever it goes.",
    whatsCovered: [
      "Excavators, loaders, and heavy mobile equipment",
      "Frac tanks, storage tanks, and treatment trailers",
      "HEPA vacuums, negative-air machines, and air scrubbers",
      "Air monitors, sampling gear, and detection equipment",
      "Confined-space entry, respirator, and PPE gear",
      "Replacement cost on scheduled equipment",
    ],
    whoItsFor: [
      "Environmental contractors with significant mobile equipment",
      "Crews whose gear travels between remediation sites",
      "Operations with expensive HEPA, monitoring, and confined-space gear",
      "Any contractor who's had equipment stolen or damaged",
    ],
    whyCca: [
      "Equipment scheduled at replacement cost — not depreciated",
      "Coverage that follows your gear wherever it goes",
      "Theft, overturn, and transit damage covered",
    ],
    faqs: [
      {
        q: "Does general liability cover my stolen excavator or frac tank?",
        a: "No. GL and commercial property do not cover mobile equipment at a jobsite. Mobile and specialty equipment is an inland marine coverage. We schedule your excavators, frac tanks, HEPA vacuums, and monitors so theft and damage are covered wherever the gear goes.",
      },
      {
        q: "How is mobile equipment coverage different from commercial property?",
        a: "Commercial property covers gear at a fixed location like your yard. An inland marine (mobile equipment) policy follows your equipment wherever it goes — jobsite, transit, staging — which is where remediation equipment actually lives and gets damaged or stolen.",
      },
      {
        q: "Is equipment coverage replacement cost or actual cash value?",
        a: "We write mobile equipment at replacement cost so a stolen excavator or damaged HEPA vac is replaced new, not depreciated to pennies. That's the difference between staying on schedule and buying gear out of pocket.",
      },
      {
        q: "What frac tanks and treatment equipment can be scheduled?",
        a: "Frac tanks, roll-off boxes, storage tanks, treatment trailers, filter presses, and other remediation equipment can all be scheduled. We build a schedule listing each major item and its replacement value, and you can update it as you add gear.",
      },
      {
        q: "How do I value my equipment for a floater?",
        a: "We build a schedule listing each major item — excavator, frac tank, HEPA vac, monitor — and its replacement value. You can update the schedule as you add gear. Accurate scheduling keeps premiums fair and claims fast.",
      },
      {
        q: "Are HEPA vacuums and air monitors covered?",
        a: "Yes. Specialty remediation gear — HEPA vacuums, negative-air machines, air scrubbers, particulate and gas monitors, sampling equipment — is exactly what we schedule. These items are expensive and theft-prone, and replacement cost coverage keeps your crew working.",
      },
      {
        q: "Does the policy cover borrowed or rented equipment?",
        a: "It can. We can extend coverage to borrowed and rented equipment — rentals are common for specialty gear, large excavators, or frac tanks. Tell us what you rent and we'll structure the coverage.",
      },
      {
        q: "How fast are equipment claims paid?",
        a: "Once you provide a police report (for theft) and the schedule, equipment claims are typically paid quickly so you can replace gear and get back to work. We help you document to keep it moving.",
      },
    ],
  },
  "umbrella-excess-liability": {
    heroBlurb:
      "Layered limits above your GL, CPL, auto, and employers' liability — essential when a contamination release, a multi-party Superfund claim, or a catastrophic jobsite loss could otherwise exhaust your primary coverage and threaten the entire company.",
    whatsCovered: [
      "Additional limits above GL, CPL, auto, and employers' liability",
      "Limits from $2M up to $10M+ for catastrophic claims",
      "Protection for multi-party Superfund and contamination losses",
      "Coverage that follows the underlying policy forms",
      "Defense contributions on large complex claims",
    ],
    whoItsFor: [
      "Environmental contractors whose contracts require higher limits",
      "Crews on refinery, Superfund, and government projects",
      "Contractors with significant assets to protect",
      "Any contractor whose primary limits no longer match exposure",
    ],
    whyCca: [
      "Limits layered cleanly above your underlying program — including CPL",
      "Up to $10M+ available for high-exposure operations",
      "Priced for environmental contractors, not generic small business",
    ],
    faqs: [
      {
        q: "What does an umbrella policy cover for an environmental contractor?",
        a: "An umbrella adds liability limits above your general liability, CPL, commercial auto, and employers' liability. If a contamination release, a multi-party claim, or a catastrophic jobsite loss exhausts your primary policies, the umbrella pays the layers above — protecting your assets and your contracts.",
      },
      {
        q: "Does the umbrella sit over my CPL policy too?",
        a: "It should. For environmental contractors, the most important catastrophic exposure is a pollution claim — so we structure the umbrella to sit over the CPL as well as GL, auto, and employers' liability. Not every umbrella does; we make sure yours does.",
      },
      {
        q: "How much umbrella coverage does an environmental contractor need?",
        a: "It's driven by your largest realistic loss and your contract requirements. Refineries, Superfund primes, and government clients often require $5M or $10M total limits. We model your worst-case contamination and liability scenarios and size the umbrella to what your work actually demands.",
      },
      {
        q: "Why would a refinery or agency require an umbrella?",
        a: "Large industrial and federal projects shift risk down to environmental subcontractors and require proof of high limits — often $5M–$10M — plus additional-insured status with pollution extension. Carrying an umbrella lets you bid that work and protects you from a catastrophic claim.",
      },
      {
        q: "How is umbrella premium calculated?",
        a: "Umbrella premium is a fraction of your underlying liability cost and reflects your operations, underlying limits, and the umbrella layer chosen. Because it sits above your primary policies, it's one of the most cost-effective ways to add protection.",
      },
      {
        q: "Can I add umbrella limits mid-policy if a contract requires it?",
        a: "Often yes. If a new project requires higher limits, we can frequently increase the umbrella (subject to underwriting) so you can take the work. Tell us the requirement and we'll move.",
      },
      {
        q: "Does the umbrella cover pollution and contamination claims?",
        a: "Yes — when properly structured. The umbrella responds to the same types of claims your underlying CPL covers — including contamination releases and cleanup claims — once primary limits are exhausted. We make sure pollution is a covered underlying policy on the umbrella schedule.",
      },
      {
        q: "What's the difference between umbrella and excess liability?",
        a: "A true umbrella can drop down to cover some claims not covered by underlying policies; a straight excess policy simply adds limits on top of the same coverage. We place the form that fits your exposure and budget, and make sure it coordinates with your CPL.",
      },
    ],
  },
};

/* ============================================================
   COVERAGE REGIONS — for coverage page
   ============================================================ */
export const AZ_REGIONS = [
  { name: "Gulf Coast & Texas", note: "TX, LA, MS, AL — the densest petrochemical and refining corridor" },
  { name: "Northeast & Mid-Atlantic", note: "NY, NJ, PA, New England — brownfield and Superfund legacy markets" },
  { name: "Great Lakes & Rust Belt", note: "MI, OH, IL, IN, WI — heavy industrial and steel-site redevelopment" },
  { name: "California & West Coast", note: "CA — DTSC, RWQCB, and the strictest environmental regulation" },
  { name: "U.S. Southeast", note: "FL, GA, NC, SC — mold, hurricane debris, and coastal industrial work" },
  { name: "Rocky Mountain", note: "CO, UT, ID, MT — mining-legacy and oil & gas cleanup" },
  { name: "Pacific Northwest", note: "OR, WA — timber, mill, and contaminated-sediment work" },
  { name: "Southwest & Desert", note: "AZ, NV, NM — mining, military, and federal facility cleanup" },
];

/* ============================================================
   US STATES — for quote form select
   ============================================================ */
export const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

/* ============================================================
   Quote form select options (environmental-specific)
   ============================================================ */
export const QUOTE_SERVICE_TYPES = [
  "Contractors Pollution Liability (CPL)",
  "General Liability Insurance",
  "Professional Liability / E&O",
  "Workers' Compensation",
  "Commercial Auto Insurance",
  "Commercial Property Insurance",
  "Inland Marine / Mobile Equipment",
  "Umbrella / Excess Liability",
  "Full program / bundle (recommended)",
  "Not sure — help me figure it out",
];

export const YEARS_OPTIONS = [
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "6–10 years",
  "10+ years",
];
