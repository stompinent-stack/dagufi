"use client";

import { useState } from "react";
import { Search, Package, Loader2 } from "lucide-react";

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to Shopify's order status page or 17track
    const trackingUrl = `https://www.17track.net/nl`;
    window.open(trackingUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="pt-24 md:pt-28 min-h-screen">
      {/* Header */}
      <div className="bg-cream-50 border-b border-cream-200">
        <div className="container-tight section-padding py-12 md:py-16">
          <p className="font-body text-xs tracking-widest uppercase text-gold-500 mb-2">
            Pakket opvolgen
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-light text-charcoal-900">
            Bestelling tracken
          </h1>
          <p className="font-body text-base text-charcoal-900/50 mt-3 max-w-md">
            Voer jouw bestelnummer en e-mailadres in om de status van jouw
            bestelling te bekijken.
          </p>
        </div>
      </div>

      <div className="container-tight section-padding py-12 md:py-16">
        <div className="max-w-md mx-auto">
          {/* Icon */}
          <div className="flex justify-center mb-10">
            <div className="w-20 h-20 bg-cream-100 rounded-full flex items-center justify-center">
              <Package size={32} strokeWidth={1} className="text-gold-500" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-body text-xs tracking-wider uppercase text-charcoal-900/50 block mb-2">
                Bestelnummer *
              </label>
              <input
                type="text"
                required
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                className="w-full border border-cream-300 px-4 py-3 font-body text-sm focus:border-gold-400 focus:outline-none transition-colors"
                placeholder="#1001"
              />
            </div>

            <div>
              <label className="font-body text-xs tracking-wider uppercase text-charcoal-900/50 block mb-2">
                E-mailadres *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-cream-300 px-4 py-3 font-body text-sm focus:border-gold-400 focus:outline-none transition-colors"
                placeholder="jouw@email.nl"
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              <Search size={16} />
              Bestelling zoeken
            </button>
          </form>

          {submitted && (
            <div className="mt-6 p-5 bg-cream-50 border border-cream-200">
              <p className="font-body text-sm text-charcoal-900/60 leading-relaxed">
                Je bestelling wordt opgezocht. Als je een track & trace code
                hebt ontvangen per e-mail, kun je die gebruiken op de
                trackingpagina van de verzender.
              </p>
              <p className="font-body text-sm text-charcoal-900/40 mt-3">
                Geen e-mail ontvangen? Check je spam of neem contact op via{" "}
                <a
                  href="mailto:support@dagufi.com"
                  className="text-gold-500 hover:underline"
                >
                  support@dagufi.com
                </a>
              </p>
            </div>
          )}

          {/* Info box */}
          <div className="mt-8 space-y-3">
            <p className="font-body text-xs tracking-widest uppercase text-charcoal-900/30 mb-3">
              Verwachte levertijden
            </p>
            {[
              ["Nederland", "2-4 werkdagen"],
              ["België", "3-5 werkdagen"],
              ["Duitsland", "4-6 werkdagen"],
              ["Rest van Europa", "5-10 werkdagen"],
            ].map(([country, days]) => (
              <div
                key={country}
                className="flex justify-between font-body text-sm border-b border-cream-100 pb-2"
              >
                <span className="text-charcoal-900/60">{country}</span>
                <span className="text-charcoal-900 font-medium">{days}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
