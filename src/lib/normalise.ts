// src/lib/normalise.ts
// Converts raw Shopify API responses into clean app types

import type {
  ShopifyProduct,
  ShopifyProductVariant,
  Product,
  ProductVariant,
  Cart,
  CartLine,
} from "@/types/shopify";

export function normaliseProduct(raw: ShopifyProduct): Product {
  return {
    id: raw.id,
    handle: raw.handle,
    title: raw.title,
    description: raw.description,
    descriptionHtml: raw.descriptionHtml,
    vendor: raw.vendor,
    productType: raw.productType,
    tags: raw.tags,
    availableForSale: raw.availableForSale,
    priceMin: raw.priceRange.minVariantPrice.amount,
    priceMax: raw.priceRange.maxVariantPrice.amount,
    compareAtPriceMin: raw.compareAtPriceRange?.minVariantPrice?.amount ?? null,
    currencyCode: raw.priceRange.minVariantPrice.currencyCode,
    images: raw.images.edges.map((e) => e.node),
    variants: raw.variants.edges.map((e) => normaliseVariant(e.node)),
    options: raw.options,
    seo: raw.seo,
    metafields: raw.metafields ?? [],
  };
}

function normaliseVariant(raw: ShopifyProductVariant): ProductVariant {
  return {
    id: raw.id,
    title: raw.title,
    availableForSale: raw.availableForSale,
    quantityAvailable: raw.quantityAvailable,
    price: raw.price.amount,
    compareAtPrice: raw.compareAtPrice?.amount ?? null,
    currencyCode: raw.price.currencyCode,
    selectedOptions: raw.selectedOptions,
    image: raw.image,
  };
}

// ─── Cart normaliser ──────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function normaliseCart(raw: any): Cart {
  const lines: CartLine[] = raw.lines.edges.map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ({ node }: { node: any }): CartLine => ({
      id: node.id,
      quantity: node.quantity,
      totalAmount: node.cost.totalAmount.amount,
      currencyCode: node.cost.totalAmount.currencyCode,
      variantId: node.merchandise.id,
      variantTitle: node.merchandise.title,
      price: node.merchandise.price.amount,
      image: node.merchandise.image ?? null,
      productTitle: node.merchandise.product.title,
      productHandle: node.merchandise.product.handle,
    })
  );

  return {
    id: raw.id,
    checkoutUrl: raw.checkoutUrl,
    subtotal: raw.cost.subtotalAmount.amount,
    total: raw.cost.totalAmount.amount,
    currencyCode: raw.cost.subtotalAmount.currencyCode,
    lines,
  };
}

// ─── Formatting helpers ───────────────────────────────────────────────────────

export function formatPrice(amount: string, currencyCode: string): string {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: currencyCode,
  }).format(parseFloat(amount));
}

export function getDiscountPercentage(
  price: string,
  compareAtPrice: string | null
): number | null {
  if (!compareAtPrice) return null;
  const p = parseFloat(price);
  const c = parseFloat(compareAtPrice);
  if (c <= p) return null;
  return Math.round(((c - p) / c) * 100);
}
