import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Environmental Contractor Insurance | Contractors Choice Agency",
    template: "%s | Environmental Contractor Insurance",
  },
  description: SITE.description,
  keywords: [
    "environmental contractor insurance",
    "contractors pollution liability",
    "CPL insurance",
    "pollution liability insurance",
    "environmental remediation insurance",
    "asbestos abatement insurance",
    "mold remediation insurance",
    "environmental contractor workers comp",
    "hazmat contractor insurance",
    "environmental contractor general liability",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "Environmental Contractor Insurance | Contractors Choice Agency",
    description:
      "Specialized insurance for environmental remediation & hazmat contractors — Contractors Pollution Liability (CPL), general liability, professional liability, workers' comp, commercial auto, and mobile equipment. Licensed all 50 states. 15-min quotes.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Environmental Contractor Insurance — coverage for remediation & hazmat crews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Environmental Contractor Insurance | Contractors Choice Agency",
    description:
      "Specialized insurance for environmental contractors. CPL, GL, workers' comp, professional, commercial auto, mobile equipment. 15-minute quotes.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: "+18449675247",
    email: SITE.email,
    image: `${SITE.url}/images/og-image.jpg`,
    logo: `${SITE.url}/images/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.2622,
      longitude: -111.7826,
    },
    employee: {
      "@type": "Person",
      name: "Josh Cotner",
      jobTitle: "Founder & Insurance Agent",
    },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: [
      "Contractors Pollution Liability (CPL) Insurance",
      "General Liability Insurance for Environmental Contractors",
      "Professional Liability / E&O for Environmental Contractors",
      "Workers' Compensation for Asbestos, Mold & Lead Abatement Crews",
      "Commercial Auto Insurance for Vacuum Trucks & Tankers",
      "Commercial Property Insurance for Remediation Yards & Decon Facilities",
      "Inland Marine / Mobile Equipment Insurance for Remediation Gear",
      "Umbrella / Excess Liability Insurance for Catastrophic Contamination Losses",
    ],
  };

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
