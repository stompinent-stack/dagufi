import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/types/shopify";
import { formatPrice, getDiscountPercentage } from "@/lib/normalise";

interface FeaturedProductProps {
  product: Product;
}

export function FeaturedProduct({ product }: FeaturedProductProps) {
  const image = product.images[0];
  const discount = getDiscountPercentage(
    product.priceMin,
    product.compareAtPriceMin
  );

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-wide section-padding">
        <div className="text-center mb-12">
          <p className="font-body text-xs tracking-widest uppercase text-gold-500 mb-3">
            Uitgelicht product
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal-900">
            Ontmoet de bestseller
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
          {/* Image */}
          <div className="relative aspect-square bg-cream-100 overflow-hidden group">
            {image ? (
              <Image
                src={image.url}
                alt={image.altText ?? product.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl">🐕</span>
              </div>
            )}
            {discount && (
              <div className="absolute top-4 left-4 bg-charcoal-900 text-white px-3 py-1">
                <span className="font-body text-xs tracking-wider">
                  -{discount}%
                </span>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            <h3 className="font-display text-3xl md:text-4xl font-light text-charcoal-900">
              {product.title}
            </h3>

            <div className="flex items-baseline gap-3">
              <span className="font-display text-3xl text-charcoal-900">
                {formatPrice(product.priceMin, product.currencyCode)}
              </span>
              {product.compareAtPriceMin && (
                <span className="font-body text-base text-charcoal-900/30 line-through">
                  {formatPrice(product.compareAtPriceMin, product.currencyCode)}
                </span>
              )}
            </div>

            <p className="font-body text-base text-charcoal-900/60 leading-relaxed">
              {product.description.length > 200
                ? product.description.slice(0, 200) + "…"
                : product.description}
            </p>

            <Link
              href={`/products/${product.handle}`}
              className="btn-primary inline-flex"
            >
              Bekijk product
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Fallback when no products are loaded yet
export function FeaturedProductPlaceholder() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-wide section-padding text-center space-y-4">
        <p className="font-body text-charcoal-900/40 text-sm">
          Stel je Shopify store in om producten te tonen.
        </p>
        <Link href="/products" className="btn-primary inline-flex">
          Bekijk alle producten
        </Link>
      </div>
    </section>
  );
}
