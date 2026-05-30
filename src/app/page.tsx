import type { Metadata } from "next";
import type { Product } from "@/types/shopify";
import { getAllProducts } from "@/lib/api";
import { ProductCard } from "@/components/ui/ProductCard";

export const metadata: Metadata = {
  title: "Shop — Alle producten",
  description:
    "Ontdek de volledige Dagufi collectie premium hondenaccessoires.",
};

export const revalidate = 3600;

export default async function ProductsPage() {
  let products: Product[] = [];
  try {
    products = await getAllProducts(24);
  } catch {
    // Will show empty state
  }

  return (
    <div className="pt-24 md:pt-28 min-h-screen">
      <div className="bg-cream-50 border-b border-cream-200">
        <div className="container-wide section-padding py-12 md:py-16">
          <p className="font-body text-xs tracking-widest uppercase text-gold-500 mb-2">
            Shop
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-light text-charcoal-900">
            Alle producten
          </h1>
          {products.length > 0 && (
            <p className="font-body text-sm text-charcoal-900/40 mt-2">
              {products.length} {products.length === 1 ? "product" : "producten"}
            </p>
          )}
        </div>
      </div>

      <div className="container-wide section-padding py-12 md:py-16">
        {products.length === 0 ? (
          <div className="text-center py-20 space-y-4">
            <p className="font-display text-2xl text-charcoal-900/30">
              Nog geen producten
            </p>
            <p className="font-body text-sm text-charcoal-900/30 max-w-sm mx-auto">
              Voeg producten toe in je Shopify dashboard en ze verschijnen hier automatisch.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Ons verhaal */}
      <div className="bg-charcoal-900 text-white">
        <div className="container-wide section-padding py-16 md:py-24 max-w-2xl">
          <p className="font-body text-xs tracking-widest uppercase text-gold-400 mb-6">
            Ons verhaal
          </p>
          <p className="font-display text-3xl md:text-4xl font-light leading-relaxed mb-6">
            Dagufi
          </p>
          <p className="font-body text-base text-white/70 leading-relaxed mb-4">
            Snoop zei het ooit het best: <em>"I'm your dog."</em>
          </p>
          <p className="font-body text-base text-white/70 leading-relaxed mb-4">
            Niet zomaar een uitspraak. Een belofte. Jouw hond is je trouwste vriend, je dagelijkse rust, je echte homie.
          </p>
          <p className="font-body text-base text-white/70 leading-relaxed mb-4">
            Dagufi is gebouwd rond die gedachte. De naam zegt het zelf — <strong className="text-white">Da·gu·fi. Jouw hond.</strong>
          </p>
          <p className="font-body text-base text-white/70 leading-relaxed mb-8">
            Wij maken alleen producten die die band versterken. Want jij en je hond? Dat is de echte connectie.
          </p>
          <p className="font-display text-xl text-gold-400 italic">
            Dagufi. I'm your dog.
          </p>
        </div>
      </div>
    </div>
  );
}
