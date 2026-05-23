// src/app/products/[handle]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProducts, getProductByHandle } from "@/lib/api";
import { ProductPageClient } from "./ProductPageClient";

interface Props {
  params: { handle: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductByHandle(params.handle).catch(() => null);
  if (!product) return { title: "Product niet gevonden" };

  return {
    title: product.seo.title ?? product.title,
    description:
      product.seo.description ??
      product.description.slice(0, 155),
    openGraph: {
      title: product.seo.title ?? product.title,
      description: product.seo.description ?? product.description.slice(0, 155),
      images: product.images[0]
        ? [{ url: product.images[0].url }]
        : undefined,
    },
  };
}

export async function generateStaticParams() {
  try {
    const products = await getAllProducts(50);
    return products.map((p) => ({ handle: p.handle }));
  } catch {
    return [];
  }
}

export const revalidate = 3600;

export default async function ProductPage({ params }: Props) {
  const product = await getProductByHandle(params.handle).catch(() => null);
  if (!product) notFound();

  return <ProductPageClient product={product} />;
}
