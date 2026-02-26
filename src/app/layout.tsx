import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://biosbalance.net"), // Replace with actual domain
  title: {
    default: "Balance | Mind & Body Matters",
    template: "%s | Balance",
  },
  description: "Boutique firm especialized in Health, Wellness & Consciousness (HWC) for Organizations. Wellbeing, Mental Health, and Human Development.",
  keywords: ["Corporate Wellness", "Mental Health", "Consciousness", "Bienestar Corporativo", "Salud Mental Organizacional", "Human Resources Consulting"],
  authors: [{ name: "Balance" }],
  creator: "Balance",
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
    url: "https://biosbalance.net",
    title: "Balance | Mind & Body Matters",
    description: "Diseñamos e implementamos soluciones de bienestar corporativo alineadas a la estrategia, la cultura y los objetivos de cada empresa.",
    siteName: "Balance",
    images: [
      {
        url: "/og-image.jpg", // Add a nice image in the public folder later
        width: 1200,
        height: 630,
        alt: "Balance - Health, Wellness & Consciousness for Organizations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Balance | Mind & Body Matters",
    description: "Health, Wellness & Consciousness for Organizations.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://biosbalance.net",
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
