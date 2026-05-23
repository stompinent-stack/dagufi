"use client";

import { useState } from "react";
import Link from "lucide-react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import NextLink from "next/link";

const faqs = [
  {
    q: "Voor welke honden is het Dagufi harnas geschikt?",
    a: "Het Dagufi harnas is beschikbaar in 5 maten en geschikt voor honden van 2 kg tot 60+ kg. Gebruik onze maattabel om de perfecte maat te vinden.",
  },
  {
    q: "Hoe snel wordt mijn bestelling geleverd?",
    a: "Bestellingen geplaatst voor 22:00 worden de volgende werkdag verzonden. Gemiddelde levertijd binnen Nederland is 2-4 werkdagen.",
  },
  {
    q: "Kan ik het harnas terugsturen als het niet past?",
    a: "Ja, je hebt 30 dagen de tijd om het harnas kosteloos te retourneren. Het product moet in originele staat zijn.",
  },
  {
    q: "Is het harnas veilig als mijn hond sterk trekt?",
    a: "Absoluut. Het harnas is getest op trekkrachten tot 200 kg. De roestvrij stalen clips en verstevigde naden zorgen voor maximale veiligheid.",
  },
];

export function FaqPreview() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="container-tight section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-body text-xs tracking-widest uppercase text-gold-500 mb-3">
            Veelgestelde vragen
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal-900">
            Jouw vragen, beantwoord
          </h2>
        </div>

        <div className="space-y-3 max-w-2xl mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-cream-200 overflow-hidden hover:border-gold-300 transition-colors"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-body text-sm font-medium text-charcoal-900 pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={cn(
                    "text-charcoal-900/40 flex-shrink-0 transition-transform duration-200",
                    open === i && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  open === i ? "max-h-40" : "max-h-0"
                )}
              >
                <p className="font-body text-sm text-charcoal-900/60 leading-relaxed px-5 pb-5">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <NextLink
            href="/faq"
            className="inline-flex items-center gap-2 font-body text-sm tracking-wider text-gold-500 hover:text-gold-600 transition-colors uppercase"
          >
            Alle veelgestelde vragen
            <ArrowRight size={16} />
          </NextLink>
        </div>
      </div>
    </section>
  );
}
