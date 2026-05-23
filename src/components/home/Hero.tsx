"use client";

import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream-50">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-300/10 via-transparent to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-wide section-padding w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Copy */}
          <div className="space-y-8 animate-fade-up">
            {/* Social proof pill */}
            <div className="inline-flex items-center gap-2 bg-white border border-gold-300/40 px-4 py-2 shadow-sm">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={11}
                    className="text-gold-500 fill-gold-500"
                  />
                ))}
              </div>
              <span className="font-body text-xs text-charcoal-900/60 tracking-wide">
                Meer dan 2.000+ tevreden hondenbezitters
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-charcoal-900 leading-[1.05]">
                Stop het
                <br />
                <em className="not-italic text-gold-500">trekken.</em>
                <br />
                Begin te
                <br />
                genieten.
              </h1>
              <p className="font-body text-lg text-charcoal-900/60 max-w-md leading-relaxed">
                De Dagufi Anti-Trek Lijn geeft jou de controle terug — zonder
                ongemak voor jouw hond. Premium materialen, tijdloos design.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-primary">
                Bekijk producten
                <ArrowRight size={16} />
              </Link>
              <Link href="#how-it-works" className="btn-secondary">
                Hoe het werkt
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-6 pt-2">
              {[
                "Gratis verzending v.a. €40",
                "30 dagen retour",
                "Veilig betalen",
              ].map((item) => (
                <span
                  key={item}
                  className="font-body text-xs tracking-wider text-charcoal-900/40 uppercase flex items-center gap-1.5 before:content-['✓'] before:text-gold-500 before:font-bold"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Product image placeholder */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <div className="relative aspect-square max-w-lg mx-auto lg:mx-0 lg:ml-auto">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-gold-300/20 rotate-3" />
              <div className="absolute -inset-2 border border-gold-300/10" />

              {/* Image container */}
              <div className="relative bg-cream-100 aspect-square overflow-hidden">
                {/* Replace with Next/Image when you have an actual product image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gold-300/20 flex items-center justify-center">
                      <span className="text-4xl">🐕</span>
                    </div>
                    <p className="font-body text-sm text-charcoal-900/30">
                      Productfoto hier
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white shadow-lg px-5 py-3 border border-cream-200">
                <p className="font-display text-2xl font-light text-gold-500">-30%</p>
                <p className="font-body text-xs text-charcoal-900/50 tracking-wide">
                  Introductiekorting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
