// src/app/layout.tsx
import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { Analytics } from "@vercel/analytics/react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dagufi.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dagufi — Premium Hondenaccessoires",
    template: "%s | Dagufi",
  },
  description:
    "Ontdek Dagufi's premium collectie hondenaccessoires. Stijlvol, duurzaam en ontworpen voor de moderne hondeneigenaar.",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteUrl,
    siteName: "Dagufi",
    images: [{ url: `${siteUrl}/og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dagufi",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-body bg-white text-charcoal-900 antialiased">
        <Header />
        <CartDrawer />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
