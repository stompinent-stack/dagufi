import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Hondenadvies & tips",
  description:
    "Lees onze tips over automatische voerbakken, anti-trek harnassen en meer hondenaccessoires. Alles wat je moet weten als hondeneigenaar.",
};

export default function BlogPage() {
  return (
    <div className="pt-24 md:pt-28 min-h-screen">
      <div className="bg-cream-50 border-b border-cream-200">
        <div className="container-wide section-padding py-12 md:py-16">
          <p className="font-body text-xs tracking-widest uppercase text-gold-500 mb-2">
            Blog
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-light text-charcoal-900">
            Hondenadvies & tips
          </h1>
          <p className="font-body text-sm text-charcoal-900/40 mt-2">
            Alles wat je moet weten als hondeneigenaar
          </p>
        </div>
      </div>

      <div className="container-wide section-padding py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block border border-cream-200 hover:border-gold-300 transition-colors"
            >
              <div className="p-6 space-y-3">
                <p className="font-body text-xs tracking-widest uppercase text-gold-500">
                  {post.category}
                </p>
                <h2 className="font-display text-xl font-light text-charcoal-900 group-hover:text-gold-500 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="font-body text-sm text-charcoal-900/60 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="font-body text-xs text-charcoal-900/30">
                    {post.date}
                  </span>
                  <span className="font-body text-xs text-gold-500 group-hover:underline">
                    Lees meer →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
