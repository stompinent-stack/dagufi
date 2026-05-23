"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqCategories = [
  {
    category: "Bestellen & levering",
    faqs: [
      {
        q: "Hoe snel wordt mijn bestelling geleverd?",
        a: "Bestellingen geplaatst voor 22:00 worden de volgende werkdag verstuurd. De gemiddelde levertijd binnen Nederland is 2-4 werkdagen. Voor België rekenen we 3-5 werkdagen.",
      },
      {
        q: "Wat zijn de verzendkosten?",
        a: "Verzending is gratis bij bestellingen vanaf €40. Bij bestellingen onder de €40 rekenen we €4,95 verzendkosten.",
      },
      {
        q: "Kan ik mijn bestelling tracken?",
        a: "Ja! Na verzending ontvang je een track & trace code per e-mail. Je kunt ook onze Track Order pagina gebruiken.",
      },
    ],
  },
  {
    category: "Product & maatvoering",
    faqs: [
      {
        q: "Voor welke honden is het Dagufi harnas geschikt?",
        a: "Het Dagufi harnas is beschikbaar in 5 maten en geschikt voor honden van 2 kg tot 60+ kg. Gebruik onze maattabel op de productpagina voor de juiste maat.",
      },
      {
        q: "Hoe pas ik het harnas goed aan?",
        a: "Het harnas heeft 5 verstelbare punten. Er moet minimaal 2 vingers passen tussen het harnas en de huid van jouw hond. We leveren een gedetailleerde instructiekaart mee.",
      },
      {
        q: "Van welk materiaal is het harnas gemaakt?",
        a: "Het harnas is gemaakt van duurzaam nylon webbing met roestvrij stalen clips en D-ringen. Alle materialen zijn huidvriendelijk en hypoallergeen.",
      },
      {
        q: "Is het harnas machinewasbaar?",
        a: "Ja, je kunt het harnas wassen op 30°C. Laat het daarna aan de lucht drogen. Niet in de droger.",
      },
    ],
  },
  {
    category: "Retour & garantie",
    faqs: [
      {
        q: "Kan ik het harnas retourneren?",
        a: "Je hebt 30 dagen de tijd om het product te retourneren, mits het in originele en ongebruikte staat verkeert. Neem contact op via support@dagufi.com om een retour te starten.",
      },
      {
        q: "Hoe lang duurt de terugbetaling?",
        a: "Na ontvangst van het retour verwerken we jouw terugbetaling binnen 5 werkdagen. Het bedrag verschijnt afhankelijk van jouw bank binnen 1-3 werkdagen op jouw rekening.",
      },
      {
        q: "Wat als het product defect is?",
        a: "Neem direct contact op via support@dagufi.com met foto's van het defect. We sturen je kosteloos een nieuw product op of betalen terug.",
      },
    ],
  },
  {
    category: "Betaling",
    faqs: [
      {
        q: "Welke betaalmethoden accepteren jullie?",
        a: "We accepteren iDEAL, Creditcard (Visa, Mastercard, Amex), PayPal, Klarna (achteraf betalen) en meer. De betaling verloopt veilig via Shopify.",
      },
      {
        q: "Is betalen veilig?",
        a: "Ja, alle betalingen verlopen via Shopify Payments met SSL-encryptie. We slaan geen betaalgegevens op onze servers op.",
      },
    ],
  },
];

export default function FaqPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggle = (key: string) =>
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="pt-24 md:pt-28 min-h-screen">
      {/* Header */}
      <div className="bg-cream-50 border-b border-cream-200">
        <div className="container-tight section-padding py-12 md:py-16">
          <p className="font-body text-xs tracking-widest uppercase text-gold-500 mb-2">
            Hulp
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-light text-charcoal-900">
            Veelgestelde vragen
          </h1>
          <p className="font-body text-base text-charcoal-900/50 mt-3 max-w-md">
            Staat jouw vraag er niet bij? Mail ons op{" "}
            <a
              href="mailto:support@dagufi.com"
              className="text-gold-500 hover:underline"
            >
              support@dagufi.com
            </a>
          </p>
        </div>
      </div>

      {/* FAQ accordion */}
      <div className="container-tight section-padding py-12 md:py-16 space-y-12">
        {faqCategories.map((cat) => (
          <div key={cat.category}>
            <h2 className="font-display text-2xl font-light text-charcoal-900 mb-5 pb-3 border-b border-cream-200">
              {cat.category}
            </h2>
            <div className="space-y-3">
              {cat.faqs.map((faq, i) => {
                const key = `${cat.category}-${i}`;
                return (
                  <div
                    key={key}
                    className="border border-cream-200 overflow-hidden hover:border-gold-300 transition-colors"
                  >
                    <button
                      className="w-full flex items-center justify-between p-5 text-left"
                      onClick={() => toggle(key)}
                      aria-expanded={!!openItems[key]}
                    >
                      <span className="font-body text-sm font-medium text-charcoal-900 pr-4">
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={16}
                        className={cn(
                          "text-charcoal-900/40 flex-shrink-0 transition-transform duration-200",
                          openItems[key] && "rotate-180"
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-200",
                        openItems[key] ? "max-h-60" : "max-h-0"
                      )}
                    >
                      <p className="font-body text-sm text-charcoal-900/60 leading-relaxed px-5 pb-5">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
