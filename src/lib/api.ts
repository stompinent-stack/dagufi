// src/lib/api.ts
// High-level API functions used by pages and components

import {
  shopifyFetch,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_HANDLE,
  GET_FEATURED_PRODUCTS,
  CREATE_CART,
  ADD_TO_CART,
  UPDATE_CART,
  REMOVE_FROM_CART,
  GET_CART,
} from "./shopify";
import { normaliseProduct, normaliseCart } from "./normalise";
import type { Product, Cart } from "@/types/shopify";
import type { ShopifyProduct } from "@/types/shopify";

// ─── Products ─────────────────────────────────────────────────────────────────

export async function getAllProducts(first = 24): Promise<Product[]> {
  const data = await shopifyFetch<{
    products: { edges: { node: ShopifyProduct }[] };
  }>({
    query: GET_ALL_PRODUCTS,
    variables: { first },
    tags: ["products"],
  });
  return data.products.edges.map((e) => normaliseProduct(e.node));
}

export async function getProductByHandle(
  handle: string
): Promise<Product | null> {
  const data = await shopifyFetch<{ product: ShopifyProduct | null }>({
    query: GET_PRODUCT_BY_HANDLE,
    variables: { handle },
    tags: [`product-${handle}`],
  });
  return data.product ? normaliseProduct(data.product) : null;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const data = await shopifyFetch<{
    products: { edges: { node: ShopifyProduct }[] };
  }>({
    query: GET_FEATURED_PRODUCTS,
    tags: ["featured-products"],
  });
  return data.products.edges.map((e) => normaliseProduct(e.node));
}

// ─── Cart (client-side only — uses no-store cache) ────────────────────────────

export async function createCart(
  variantId: string,
  quantity: number
): Promise<Cart> {
  const data = await shopifyFetch<{
    cartCreate: { cart: unknown; userErrors: { message: string }[] };
  }>({
    query: CREATE_CART,
    variables: { lines: [{ merchandiseId: variantId, quantity }] },
    cache: "no-store",
  });

  if (data.cartCreate.userErrors.length > 0) {
    throw new Error(data.cartCreate.userErrors[0].message);
  }

  return normaliseCart(data.cartCreate.cart);
}

export async function addToCart(
  cartId: string,
  variantId: string,
  quantity: number
): Promise<Cart> {
  const data = await shopifyFetch<{
    cartLinesAdd: { cart: unknown; userErrors: { message: string }[] };
  }>({
    query: ADD_TO_CART,
    variables: {
      cartId,
      lines: [{ merchandiseId: variantId, quantity }],
    },
    cache: "no-store",
  });

  if (data.cartLinesAdd.userErrors.length > 0) {
    throw new Error(data.cartLinesAdd.userErrors[0].message);
  }

  return normaliseCart(data.cartLinesAdd.cart);
}

export async function updateCartLine(
  cartId: string,
  lineId: string,
  quantity: number
): Promise<Cart> {
  const data = await shopifyFetch<{
    cartLinesUpdate: { cart: unknown; userErrors: { message: string }[] };
  }>({
    query: UPDATE_CART,
    variables: { cartId, lines: [{ id: lineId, quantity }] },
    cache: "no-store",
  });

  if (data.cartLinesUpdate.userErrors.length > 0) {
    throw new Error(data.cartLinesUpdate.userErrors[0].message);
  }

  return normaliseCart(data.cartLinesUpdate.cart);
}

export async function removeCartLine(
  cartId: string,
  lineId: string
): Promise<Cart> {
  const data = await shopifyFetch<{
    cartLinesRemove: { cart: unknown; userErrors: { message: string }[] };
  }>({
    query: REMOVE_FROM_CART,
    variables: { cartId, lineIds: [lineId] },
    cache: "no-store",
  });

  if (data.cartLinesRemove.userErrors.length > 0) {
    throw new Error(data.cartLinesRemove.userErrors[0].message);
  }

  return normaliseCart(data.cartLinesRemove.cart);
}

export async function getCart(cartId: string): Promise<Cart | null> {
  const data = await shopifyFetch<{ cart: unknown | null }>({
    query: GET_CART,
    variables: { cartId },
    cache: "no-store",
  });

  return data.cart ? normaliseCart(data.cart) : null;
}
