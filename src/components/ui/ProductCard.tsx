import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import type { Product } from "@/types/shopify";
import { formatPrice, getDiscountPercentage } from "@/lib/normalise";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const image = product.images[0];
  const discount = getDiscountPercentage(
    product.priceMin,
    product.compareAtPriceMin
  );

  return (
    <Link href={`/products/${product.handle}`} className="group block">
      {/* Image */}
      <div className="relative aspect-square bg-cream-100 overflow-hidden mb-4">
        {image ? (
          <Image
            src={image.url}
            alt={image.altText ?? product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl">🐕</span>
          </div>
        )}

        {discount && (
          <div className="absolute top-3 left-3 bg-charcoal-900 text-white px-2.5 py-1">
            <span className="font-body text-[11px] tracking-wider">
              -{discount}%
            </span>
          </div>
        )}

        {!product.availableForSale && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <span className="font-body text-sm text-charcoal-900/50 tracking-widest uppercase">
              Uitverkocht
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        {/* Fake stars for trust */}
        <div className="flex items-center gap-1.5">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} className="text-gold-400 fill-gold-400" />
            ))}
          </div>
          <span className="font-body text-[11px] text-charcoal-900/40">(47)</span>
        </div>

        <h3 className="font-body text-sm font-medium text-charcoal-900 group-hover:text-gold-500 transition-colors line-clamp-1">
          {product.title}
        </h3>

        <div className="flex items-baseline gap-2">
          <span className="font-body text-base font-medium text-charcoal-900">
            {formatPrice(product.priceMin, product.currencyCode)}
          </span>
          {product.compareAtPriceMin && (
            <span className="font-body text-sm text-charcoal-900/30 line-through">
              {formatPrice(product.compareAtPriceMin, product.currencyCode)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export function ProductCardSkeleton() {
  return (
    <div>
      <div className="aspect-square skeleton mb-4" />
      <div className="space-y-2">
        <div className="h-3 skeleton w-20" />
        <div className="h-4 skeleton w-3/4" />
        <div className="h-4 skeleton w-1/3" />
      </div>
    </div>
  );
}
