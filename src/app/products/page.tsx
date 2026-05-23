// src/app/products/page.tsx
import type { Metadata } from "next";
import { getAllProducts } from "@/lib/api";
import { ProductCard } from "@/components/ui/ProductCard";

export const metadata: Metadata = {
  title: "Shop — Alle producten",
  description:
    "Ontdek de volledige Dagufi collectie premium hondenaccessoires. Anti-trek harnassen, riemen en meer.",
};

export const revalidate = 3600;

export default async function ProductsPage() {
  let products = [];
  try {
    products = await getAllProducts(24);
  } catch {
    // Will show empty state
  }

  return (
    <div className="pt-24 md:pt-28 min-h-screen">
      {/* Header */}
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

      {/* Grid */}
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
    </div>
  );
}
