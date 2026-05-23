import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-20 md:py-28 bg-charcoal-900 relative overflow-hidden">
      {/* Gold accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="container-tight section-padding text-center space-y-8">
        <p className="font-body text-xs tracking-widest uppercase text-gold-400">
          Klaar voor een betere wandeling?
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight">
          Geef jouw hond de
          <br />
          <em className="not-italic text-gold-400">vrijheid</em> die het verdient.
        </h2>
        <p className="font-body text-base text-white/50 max-w-md mx-auto leading-relaxed">
          Bestel vandaag en ontvang gratis verzending. 30 dagen niet tevreden?
          Geld terug — geen vragen gesteld.
        </p>
        <Link href="/products" className="btn-gold inline-flex mx-auto">
          Nu bestellen
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
    </section>
  );
}
