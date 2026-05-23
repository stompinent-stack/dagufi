// src/app/page.tsx
import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { FeaturedProduct, FeaturedProductPlaceholder } from "@/components/home/FeaturedProduct";
import { Benefits } from "@/components/home/Benefits";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { FaqPreview } from "@/components/home/FaqPreview";
import { CtaBanner } from "@/components/home/CtaBanner";
import { getFeaturedProducts } from "@/lib/api";

export const metadata: Metadata = {
  title: "Dagufi — Premium Hondenaccessoires",
  description:
    "Stop het trekken, begin te genieten. Dagufi's anti-trek harnas geeft jou de controle terug — zonder ongemak voor jouw hond.",
};

// Revalidate every hour
export const revalidate = 3600;

export default async function HomePage() {
  let featuredProducts = [];
  try {
    featuredProducts = await getFeaturedProducts();
  } catch {
    // API not configured yet — show placeholder
  }

  const featured = featuredProducts[0] ?? null;

  return (
    <>
      <Hero />
      <ProblemSolution />
      {featured ? (
        <FeaturedProduct product={featured} />
      ) : (
        <FeaturedProductPlaceholder />
      )}
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <FaqPreview />
      <CtaBanner />
    </>
  );
}
