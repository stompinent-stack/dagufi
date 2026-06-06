import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="pt-24 md:pt-28 min-h-screen">
      <div className="bg-cream-50 border-b border-cream-200">
        <div className="container-wide section-padding py-12 md:py-16 max-w-3xl">
          <Link
            href="/blog"
            className="font-body text-xs tracking-widest uppercase text-gold-500 hover:underline mb-4 inline-block"
          >
            ← Terug naar blog
          </Link>
          <p className="font-body text-xs tracking-widest uppercase text-gold-500 mb-2">
            {post.category}
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-light text-charcoal-900 leading-tight">
            {post.title}
          </h1>
          <p className="font-body text-xs text-charcoal-900/30 mt-4">
            {post.date}
          </p>
        </div>
      </div>

      <div className="container-wide section-padding py-12 md:py-16 max-w-3xl">
        <div
          className="prose prose-charcoal max-w-none font-body"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 p-8 bg-cream-50 border border-cream-200">
          <p className="font-display text-2xl font-light text-charcoal-900 mb-2">
            Bekijk onze producten
          </p>
          <p className="font-body text-sm text-charcoal-900/60 mb-4">
            Ontdek onze collectie automatische voerbakken en hondenaccessoires.
          </p>
          <Link href="/products" className="btn-primary inline-flex">
            Naar de shop
          </Link>
        </div>
      </div>
    </div>
  );
}
