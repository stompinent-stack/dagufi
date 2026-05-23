"use client";

import { useState } from "react";
import { Mail, Clock, MessageCircle, Check, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    orderNumber: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // In production: connect to a form service like Formspree, Resend, etc.
    // For now, simulate sending
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
  };

  return (
    <div className="pt-24 md:pt-28 min-h-screen">
      {/* Header */}
      <div className="bg-cream-50 border-b border-cream-200">
        <div className="container-tight section-padding py-12 md:py-16">
          <p className="font-body text-xs tracking-widest uppercase text-gold-500 mb-2">
            Klantenservice
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-light text-charcoal-900">
            Neem contact op
          </h1>
        </div>
      </div>

      <div className="container-tight section-padding py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-xl font-light text-charcoal-900 mb-4">
                We helpen je graag
              </h2>
              <p className="font-body text-sm text-charcoal-900/60 leading-relaxed">
                Heb je een vraag over je bestelling, een product of iets anders?
                Stuur ons een bericht en we reageren zo snel mogelijk.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <Mail size={18} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-sm font-medium text-charcoal-900">
                    E-mail
                  </p>
                  <a
                    href="mailto:support@dagufi.com"
                    className="font-body text-sm text-charcoal-900/60 hover:text-gold-500 transition-colors"
                  >
                    support@dagufi.com
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock size={18} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-sm font-medium text-charcoal-900">
                    Reactietijd
                  </p>
                  <p className="font-body text-sm text-charcoal-900/60">
                    Binnen 24 uur op werkdagen
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MessageCircle
                  size={18}
                  className="text-gold-500 flex-shrink-0 mt-0.5"
                />
                <div>
                  <p className="font-body text-sm font-medium text-charcoal-900">
                    Taal
                  </p>
                  <p className="font-body text-sm text-charcoal-900/60">
                    Nederlands & Engels
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4 bg-cream-50 border border-cream-200">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Check size={22} className="text-emerald-600" />
                </div>
                <h3 className="font-display text-2xl font-light text-charcoal-900">
                  Bericht verzonden!
                </h3>
                <p className="font-body text-sm text-charcoal-900/50 text-center max-w-xs">
                  We sturen je binnen 24 uur een reactie op{" "}
                  <strong>{form.email}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-xs tracking-wider uppercase text-charcoal-900/50 block mb-2">
                      Naam *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      className="w-full border border-cream-300 px-4 py-3 font-body text-sm focus:border-gold-400 focus:outline-none transition-colors"
                      placeholder="Jouw naam"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs tracking-wider uppercase text-charcoal-900/50 block mb-2">
                      E-mailadres *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      className="w-full border border-cream-300 px-4 py-3 font-body text-sm focus:border-gold-400 focus:outline-none transition-colors"
                      placeholder="jouw@email.nl"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs tracking-wider uppercase text-charcoal-900/50 block mb-2">
                    Bestelnummer (optioneel)
                  </label>
                  <input
                    type="text"
                    value={form.orderNumber}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, orderNumber: e.target.value }))
                    }
                    className="w-full border border-cream-300 px-4 py-3 font-body text-sm focus:border-gold-400 focus:outline-none transition-colors"
                    placeholder="#1001"
                  />
                </div>

                <div>
                  <label className="font-body text-xs tracking-wider uppercase text-charcoal-900/50 block mb-2">
                    Onderwerp *
                  </label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, subject: e.target.value }))
                    }
                    className="w-full border border-cream-300 px-4 py-3 font-body text-sm focus:border-gold-400 focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Selecteer een onderwerp</option>
                    <option value="order">Vraag over mijn bestelling</option>
                    <option value="return">Retour of ruiling</option>
                    <option value="product">Productvraag</option>
                    <option value="other">Overig</option>
                  </select>
                </div>

                <div>
                  <label className="font-body text-xs tracking-wider uppercase text-charcoal-900/50 block mb-2">
                    Bericht *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="w-full border border-cream-300 px-4 py-3 font-body text-sm focus:border-gold-400 focus:outline-none transition-colors resize-none"
                    placeholder="Vertel ons hoe we je kunnen helpen..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Verzenden...
                    </>
                  ) : (
                    "Verstuur bericht"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
