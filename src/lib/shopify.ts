// src/lib/shopify.ts
// Shopify Storefront API client + alle GraphQL queries

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

export const SHOPIFY_ENDPOINT = `https://${domain}/api/2024-04/graphql.json`;

// ─── Generic fetcher ────────────────────────────────────────────────────────

export async function shopifyFetch<T>({
  query,
  variables,
  cache = "force-cache",
  tags,
}: {
  query: string;
  variables?: Record<string, unknown>;
  cache?: RequestCache;
  tags?: string[];
}): Promise<T> {
  const res = await fetch(SHOPIFY_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
    },
    body: JSON.stringify({ query, variables }),
    cache,
    next: tags ? { tags } : undefined,
  });

  if (!res.ok) {
    throw new Error(`Shopify API error: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();

  if (json.errors) {
    throw new Error(
      `Shopify GraphQL errors: ${json.errors.map((e: { message: string }) => e.message).join(", ")}`
    );
  }

  return json.data as T;
}

// ─── Fragments ──────────────────────────────────────────────────────────────

const PRODUCT_FRAGMENT = `
  fragment ProductFields on Product {
    id
    handle
    title
    description
    descriptionHtml
    vendor
    productType
    tags
    availableForSale
    priceRange {
      minVariantPrice { amount currencyCode }
      maxVariantPrice { amount currencyCode }
    }
    compareAtPriceRange {
      minVariantPrice { amount currencyCode }
    }
    images(first: 10) {
      edges {
        node {
          url
          altText
          width
          height
        }
      }
    }
    variants(first: 50) {
      edges {
        node {
          id
          title
          availableForSale
          quantityAvailable
          price { amount currencyCode }
          compareAtPrice { amount currencyCode }
          selectedOptions { name value }
          image {
            url
            altText
            width
            height
          }
        }
      }
    }
    options {
      id
      name
      values
    }
    seo { title description }
    metafields(identifiers: [
      { namespace: "custom", key: "benefits" }
      { namespace: "custom", key: "how_it_works" }
    ]) {
      namespace key value
    }
  }
`;

// ─── Queries ─────────────────────────────────────────────────────────────────

export const GET_ALL_PRODUCTS = `
  ${PRODUCT_FRAGMENT}
  query GetAllProducts($first: Int!, $after: String) {
    products(first: $first, after: $after, sortKey: CREATED_AT, reverse: true) {
      pageInfo { hasNextPage endCursor }
      edges {
        node { ...ProductFields }
      }
    }
  }
`;

export const GET_PRODUCT_BY_HANDLE = `
  ${PRODUCT_FRAGMENT}
  query GetProductByHandle($handle: String!) {
    product(handle: $handle) { ...ProductFields }
  }
`;

export const GET_FEATURED_PRODUCTS = `
  ${PRODUCT_FRAGMENT}
  query GetFeaturedProducts {
    products(first: 4, sortKey: BEST_SELLING) {
      edges { node { ...ProductFields } }
    }
  }
`;

// ─── Cart mutations ──────────────────────────────────────────────────────────

export const CREATE_CART = `
  mutation CreateCart($lines: [CartLineInput!]) {
    cartCreate(input: { lines: $lines }) {
      cart {
        id
        checkoutUrl
        cost {
          subtotalAmount { amount currencyCode }
          totalAmount { amount currencyCode }
        }
        lines(first: 50) {
          edges {
            node {
              id
              quantity
              cost {
                totalAmount { amount currencyCode }
              }
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price { amount currencyCode }
                  image { url altText }
                  product { title handle }
                }
              }
            }
          }
        }
      }
      userErrors { field message }
    }
  }
`;

export const ADD_TO_CART = `
  mutation AddToCart($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        checkoutUrl
        cost {
          subtotalAmount { amount currencyCode }
          totalAmount { amount currencyCode }
        }
        lines(first: 50) {
          edges {
            node {
              id
              quantity
              cost {
                totalAmount { amount currencyCode }
              }
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price { amount currencyCode }
                  image { url altText }
                  product { title handle }
                }
              }
            }
          }
        }
      }
      userErrors { field message }
    }
  }
`;

export const UPDATE_CART = `
  mutation UpdateCart($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        id
        checkoutUrl
        cost {
          subtotalAmount { amount currencyCode }
          totalAmount { amount currencyCode }
        }
        lines(first: 50) {
          edges {
            node {
              id
              quantity
              cost {
                totalAmount { amount currencyCode }
              }
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price { amount currencyCode }
                  image { url altText }
                  product { title handle }
                }
              }
            }
          }
        }
      }
      userErrors { field message }
    }
  }
`;

export const REMOVE_FROM_CART = `
  mutation RemoveFromCart($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        id
        checkoutUrl
        cost {
          subtotalAmount { amount currencyCode }
          totalAmount { amount currencyCode }
        }
        lines(first: 50) {
          edges {
            node {
              id
              quantity
              cost {
                totalAmount { amount currencyCode }
              }
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price { amount currencyCode }
                  image { url altText }
                  product { title handle }
                }
              }
            }
          }
        }
      }
      userErrors { field message }
    }
  }
`;

export const GET_CART = `
  query GetCart($cartId: ID!) {
    cart(id: $cartId) {
      id
      checkoutUrl
      cost {
        subtotalAmount { amount currencyCode }
        totalAmount { amount currencyCode }
      }
      lines(first: 50) {
        edges {
          node {
            id
            quantity
            cost {
              totalAmount { amount currencyCode }
            }
            merchandise {
              ... on ProductVariant {
                id
                title
                price { amount currencyCode }
                image { url altText }
                product { title handle }
              }
            }
          }
        }
      }
    }
  }
`;
