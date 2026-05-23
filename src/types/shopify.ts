// src/types/shopify.ts

export interface ShopifyImage {
  url: string;
  altText: string | null;
  width: number;
  height: number;
}

export interface ShopifyMoney {
  amount: string;
  currencyCode: string;
}

export interface ShopifyProductVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  quantityAvailable: number | null;
  price: ShopifyMoney;
  compareAtPrice: ShopifyMoney | null;
  selectedOptions: { name: string; value: string }[];
  image: ShopifyImage | null;
}

export interface ShopifyProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  vendor: string;
  productType: string;
  tags: string[];
  availableForSale: boolean;
  priceRange: {
    minVariantPrice: ShopifyMoney;
    maxVariantPrice: ShopifyMoney;
  };
  compareAtPriceRange: {
    minVariantPrice: ShopifyMoney;
  };
  images: { edges: { node: ShopifyImage }[] };
  variants: { edges: { node: ShopifyProductVariant }[] };
  options: { id: string; name: string; values: string[] }[];
  seo: { title: string | null; description: string | null };
  metafields: { namespace: string; key: string; value: string }[] | null;
}

// ─── Normalised types (used throughout the app) ───────────────────────────────

export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  vendor: string;
  productType: string;
  tags: string[];
  availableForSale: boolean;
  priceMin: string;
  priceMax: string;
  compareAtPriceMin: string | null;
  currencyCode: string;
  images: ShopifyImage[];
  variants: ProductVariant[];
  options: { id: string; name: string; values: string[] }[];
  seo: { title: string | null; description: string | null };
  metafields: { namespace: string; key: string; value: string }[];
}

export interface ProductVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  quantityAvailable: number | null;
  price: string;
  compareAtPrice: string | null;
  currencyCode: string;
  selectedOptions: { name: string; value: string }[];
  image: ShopifyImage | null;
}

// ─── Cart types ───────────────────────────────────────────────────────────────

export interface CartLine {
  id: string;
  quantity: number;
  totalAmount: string;
  currencyCode: string;
  variantId: string;
  variantTitle: string;
  price: string;
  image: ShopifyImage | null;
  productTitle: string;
  productHandle: string;
}

export interface Cart {
  id: string;
  checkoutUrl: string;
  subtotal: string;
  total: string;
  currencyCode: string;
  lines: CartLine[];
}
