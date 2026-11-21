"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { ShieldCheck, Phone, Clock, Zap, MapPin } from "lucide-react";

const WEBHOOK_URL =
  "https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=environmentalcontractorsinsurance.com";

const TRADE_TYPES = [
  "Environmental remediation contractor",
  "Asbestos / lead / mold abatement",
  "Soil & groundwater remediation",
  "Underground storage tank removal",
  "Hazardous materials (hazmat) contractor",
  "Multiple / not sure",
];

const FORM_CLASSES = {
  form: "rounded-3xl bg-white border border-adobe shadow-card p-7 md:p-9 space-y-6",
  heading: "font-heading font-extrabold text-espresso text-lg",
  label: "block text-sm font-heading font-semibold text-espresso mb-1.5",
  legend: "text-sm font-heading font-semibold text-espresso mb-1.5",
  input: "w-full px-4 py-3 rounded-xl border border-adobe bg-cream/50 text-espresso placeholder-mocha/60 focus:outline-none focus:border-clay focus:ring-2 focus:ring-clay/20 transition-all text-sm",
  button: "w-full flex items-center justify-center gap-2 px-8 py-4 bg-clay-gradient text-white font-heading font-bold rounded-full shadow-warm hover:shadow-warm-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed",
  detail: "mt-2 grid md:grid-cols-2 gap-3 pl-4 border-l-2 border-adobe",
};

const trustItems = [
  { icon: ShieldCheck, title: "Built for environmental contractors", desc: "Policies written for remediation, abatement & hazmat crews — not generic contractor coverage." },
  { icon: Zap, title: "~15-minute quotes", desc: "Real quotes from real environmental markets, fast." },
  { icon: Clock, title: "2-hour claims response", desc: "When a loss hits, you reach a person." },
  { icon: MapPin, title: "All 50 states", desc: "Licensed nationwide — NPN #8608479." },
];

export default function QuotePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-warm-radial pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-wide">
            <FadeIn className="text-center max-w-2xl mx-auto mb-12">
              <span className="pill-clay"><ShieldCheck className="h-3.5 w-3.5" /> Free quote</span>
              <h1 className="mt-5 font-heading font-extrabold text-espresso text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Get your{" "}
                <span className="bg-gradient-to-r from-clay via-clay-light to-gold-dark bg-clip-text text-transparent">
                  environmental contractor insurance quote
                </span>
              </h1>
              <p className="mt-5 lead">
                Tell us about your remediation operation. We&rsquo;ll shop A-rated
                environmental specialty markets and come back with real quotes in about
                15 minutes — no obligation.
              </p>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Trust sidebar */}
              <div className="space-y-4">
                {trustItems.map((item) => (
                  <FadeIn key={item.title}>
                    <div className="flex gap-3 p-5 rounded-2xl bg-white border border-adobe shadow-card">
                      <span className="flex-shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-clay/10 text-clay">
                        <item.icon className="h-5 w-5" strokeWidth={2.2} />
                      </span>
                      <div>
                        <p className="font-heading font-bold text-espresso text-sm">{item.title}</p>
                        <p className="text-mocha text-xs leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
                <FadeIn>
                  <div className="p-5 rounded-2xl bg-espresso text-cream text-center">
                    <p className="text-xs font-heading font-bold uppercase tracking-wider text-gold mb-2">
                      Prefer to call?
                    </p>
                    <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 text-cream font-heading font-extrabold text-xl hover:text-gold-light transition-colors">
                      <Phone className="h-5 w-5" />
                      {SITE.phone}
                    </a>
                    <p className="text-xs text-cream/60 mt-1">{SITE.hours}</p>
                  </div>
                </FadeIn>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <QuoteForm
                  formName="quote"
                  tradeName="Environmental Contractor"
                  endpoint={WEBHOOK_URL}
                  format="json"
                  netlifyFallback="/__forms.html"
                  extraFields={{ form_name: "quote", source: "environmentalcontractorsinsurance.com" }}
                  options={{ yn: "audit" }}
                  tradeTypeOptions={TRADE_TYPES}
                  defaults={{ coverageTypes: "General Liability" }}
                  prefaceQuestions={[
                    { name: "projectTypes", label: "Abatement, soil/groundwater, tank removal or other project types (optional)", type: "text" },
                    { name: "crewSize", label: "Crew size (optional)", type: "text" },
                  ]}
                  classes={FORM_CLASSES}
                  successMessage="Thank you! We received your quote request and will reach out within one business day with personalized quotes. Need it sooner? Call 844-967-5247."
                  errorMessage="Something went wrong. Please call us at 844-967-5247 or try again."
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
