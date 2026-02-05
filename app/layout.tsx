import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HealthFirst Pharmacy | Your Trusted Community Pharmacy",
  description:
    "HealthFirst Pharmacy offers prescription services, custom compounding, immunizations, health screenings, and free delivery. Serving our community with personalized pharmaceutical care.",
  keywords: [
    "pharmacy",
    "prescriptions",
    "compounding",
    "immunizations",
    "health screenings",
    "medication delivery",
    "HealthFirst Pharmacy",
  ],
  authors: [{ name: "HealthFirst Pharmacy" }],
  metadataBase: new URL("https://www.healthfirstpharmacy.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HealthFirst Pharmacy | Your Trusted Community Pharmacy",
    description:
      "Prescription services, custom compounding, immunizations, health screenings, and free delivery. Personalized care you can count on.",
    url: "https://www.healthfirstpharmacy.com",
    siteName: "HealthFirst Pharmacy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HealthFirst Pharmacy - Your Trusted Community Pharmacy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HealthFirst Pharmacy | Your Trusted Community Pharmacy",
    description:
      "Prescription services, compounding, immunizations, health screenings, and free delivery.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    name: "HealthFirst Pharmacy",
    description:
      "Your trusted community pharmacy offering prescriptions, compounding, immunizations, health screenings, and delivery services.",
    url: "https://www.healthfirstpharmacy.com",
    telephone: "+1-555-123-4567",
    email: "info@healthfirstpharmacy.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main Street",
      addressLocality: "Springfield",
      addressRegion: "IL",
      postalCode: "62701",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.7817,
      longitude: -89.6501,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    image: "https://www.healthfirstpharmacy.com/og-image.png",
    priceRange: "$$",
    sameAs: [
      "https://www.facebook.com/healthfirstpharmacy",
      "https://www.instagram.com/healthfirstpharmacy",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pharmacy Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Prescription Services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Compounding",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Immunizations",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Health Screenings",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Medication Delivery",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
