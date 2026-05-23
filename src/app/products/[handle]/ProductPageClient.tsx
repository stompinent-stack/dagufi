"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus, ChevronDown, Star, Truck, RotateCcw, Shield } from "lucide-react";
import type { Product, ProductVariant } from "@/types/shopify";
import { formatPrice, getDiscountPercentage } from "@/lib/normalise";
import { AddToCartButton } from "@/components/ui/AddToCartButton";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/lib/store";

const productFaqs = [
  {
    q: "Welke maat heb ik nodig?",
    a: "Gebruik onze maattabel hieronder. Meet de borstomtrek van jouw hond en vergelijk met de maten.",
  },
  {
    q: "Hoe lang duurt de levering?",
    a: "Bestellingen voor 22:00 worden de volgende werkdag verstuurd. Gemiddeld 2-4 werkdagen.",
  },
  {
    q: "Kan ik het ruilen als de maat niet klopt?",
    a: "Ja, gratis ruilen of retourneren binnen 30 dagen. Stuur een mail naar support@dagufi.com.",
  },
];

interface ProductPageClientProps {
  product: Product;
}

export function ProductPageClient({ product }: ProductPageClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { addItem, loading } = useCartStore();

  const discount = getDiscountPercentage(
    selectedVariant.price,
    selectedVariant.compareAtPrice
  );

  // Group options for display
  const hasVariants =
    product.variants.length > 1 ||
    (product.variants[0] && product.variants[0].title !== "Default Title");

  const handleOptionChange = (optionName: string, value: string) => {
    // Find the variant that matches all current selections with this one changed
    const newOptions = selectedVariant.selectedOptions.map((opt) =>
      opt.name === optionName ? { ...opt, value } : opt
    );

    const matchingVariant = product.variants.find((v) =>
      v.selectedOptions.every((opt) =>
        newOptions.some((no) => no.name === opt.name && no.value === opt.value)
      )
    );

    if (matchingVariant) setSelectedVariant(matchingVariant);
  };

  const handleBuyNow = async () => {
    await addItem(selectedVariant.id, quantity);
    // Cart drawer opens automatically via the store
  };

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="container-wide section-padding py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* ─── Images ─── */}
          <div className="space-y-3">
            {/* Main image */}
            <div className="relative aspect-square bg-cream-100 overflow-hidden">
              {product.images[selectedImage] ? (
                <Image
                  src={product.images[selectedImage].url}
                  alt={product.images[selectedImage].altText ?? product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl">🐕</span>
                </div>
              )}
              {discount && (
                <div className="absolute top-4 left-4 bg-charcoal-900 text-white px-3 py-1.5">
                  <span className="font-body text-xs tracking-wider">-{discount}%</span>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={cn(
                      "relative w-16 h-16 flex-shrink-0 bg-cream-100 overflow-hidden border-2 transition-colors",
                      selectedImage === i
                        ? "border-gold-500"
                        : "border-transparent hover:border-cream-300"
                    )}
                  >
                    <Image
                      src={img.url}
                      alt={img.altText ?? `Afbeelding ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ─── Product info ─── */}
          <div className="space-y-6">
            {/* Stars */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="text-gold-500 fill-gold-500" />
                ))}
              </div>
              <span className="font-body text-sm text-charcoal-900/40">
                4.9 (247 reviews)
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl md:text-4xl font-light text-charcoal-900 leading-tight">
              {product.title}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-display text-3xl font-light text-charcoal-900">
                {formatPrice(selectedVariant.price, selectedVariant.currencyCode)}
              </span>
              {selectedVariant.compareAtPrice && (
                <>
                  <span className="font-body text-lg text-charcoal-900/30 line-through">
                    {formatPrice(
                      selectedVariant.compareAtPrice,
                      selectedVariant.currencyCode
                    )}
                  </span>
                  {discount && (
                    <span className="font-body text-sm text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5">
                      -{discount}% korting
                    </span>
                  )}
                </>
              )}
            </div>

            {/* Description */}
            {product.description && (
              <p className="font-body text-base text-charcoal-900/60 leading-relaxed">
                {product.description.length > 300
                  ? product.description.slice(0, 300) + "…"
                  : product.description}
              </p>
            )}

            {/* Variants */}
            {hasVariants &&
              product.options.map((option) => (
                <div key={option.id}>
                  <p className="font-body text-sm font-medium text-charcoal-900 mb-2">
                    {option.name}:{" "}
                    <span className="font-normal text-charcoal-900/60">
                      {selectedVariant.selectedOptions.find(
                        (o) => o.name === option.name
                      )?.value}
                    </span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {option.values.map((value) => {
                      const isSelected = selectedVariant.selectedOptions.some(
                        (o) => o.name === option.name && o.value === value
                      );
                      return (
                        <button
                          key={value}
                          onClick={() => handleOptionChange(option.name, value)}
                          className={cn(
                            "min-w-[44px] px-3 h-10 font-body text-sm border transition-all",
                            isSelected
                              ? "border-charcoal-900 bg-charcoal-900 text-white"
                              : "border-cream-300 text-charcoal-900 hover:border-charcoal-900"
                          )}
                        >
                          {value}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

            {/* Quantity */}
            <div>
              <p className="font-body text-sm font-medium text-charcoal-900 mb-2">
                Aantal
              </p>
              <div className="inline-flex items-center border border-cream-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-charcoal-900/60 hover:text-charcoal-900 transition-colors"
                  aria-label="Verminder"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center font-body text-sm font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-charcoal-900/60 hover:text-charcoal-900 transition-colors"
                  aria-label="Verhoog"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <AddToCartButton
                variantId={selectedVariant.id}
                available={selectedVariant.availableForSale}
                quantity={quantity}
              />
              <button
                onClick={handleBuyNow}
                disabled={!selectedVariant.availableForSale || loading}
                className="btn-secondary w-full"
              >
                Direct kopen
              </button>
            </div>

            {/* Shipping info */}
            <div className="space-y-2 border-t border-cream-200 pt-5">
              <div className="flex items-center gap-2.5 font-body text-sm text-charcoal-900/60">
                <Truck size={15} className="text-gold-500 flex-shrink-0" />
                Gratis verzending vanaf €40 · 2-4 werkdagen
              </div>
              <div className="flex items-center gap-2.5 font-body text-sm text-charcoal-900/60">
                <RotateCcw size={15} className="text-gold-500 flex-shrink-0" />
                30 dagen gratis retourneren
              </div>
              <div className="flex items-center gap-2.5 font-body text-sm text-charcoal-900/60">
                <Shield size={15} className="text-gold-500 flex-shrink-0" />
                Veilig betalen via Shopify
              </div>
            </div>

            {/* Trust badges */}
            <TrustBadges />
          </div>
        </div>

        {/* ─── Product details (HTML) ─── */}
        {product.descriptionHtml && product.descriptionHtml.length > 100 && (
          <div className="mt-16 md:mt-24 max-w-3xl">
            <h2 className="font-display text-3xl font-light text-charcoal-900 mb-6">
              Productomschrijving
            </h2>
            <div
              className="prose-dagufi prose max-w-none"
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
          </div>
        )}

        {/* ─── Product FAQ ─── */}
        <div className="mt-16 md:mt-24 max-w-2xl">
          <h2 className="font-display text-3xl font-light text-charcoal-900 mb-8">
            Veelgestelde vragen
          </h2>
          <div className="space-y-3">
            {productFaqs.map((faq, i) => (
              <div
                key={i}
                className="border border-cream-200 overflow-hidden hover:border-gold-300 transition-colors"
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-body text-sm font-medium text-charcoal-900 pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={cn(
                      "text-charcoal-900/40 flex-shrink-0 transition-transform duration-200",
                      openFaq === i && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-200",
                    openFaq === i ? "max-h-40" : "max-h-0"
                  )}
                >
                  <p className="font-body text-sm text-charcoal-900/60 leading-relaxed px-5 pb-5">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
