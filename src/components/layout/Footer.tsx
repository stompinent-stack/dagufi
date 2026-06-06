"use client";

import Link from "next/link";

const shopLinks = [
  { label: "Alle producten", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Bestelling tracken", href: "/track-order" },
];

const legalLinks = [
  { label: "Privacybeleid", href: "/privacy-policy" },
  { label: "Algemene voorwaarden", href: "/terms-conditions" },
  { label: "Retourbeleid", href: "/refund-policy" },
  { label: "Verzendbeleid", href: "/shipping-policy" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="container-wide section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-display text-2xl tracking-[0.2em] text-white mb-4 inline-block"
            >
              DAGUFI
            </Link>
            <p className="font-body text-sm text-white/50 leading-relaxed mt-3">
              Premium hondenaccessoires voor de moderne hondeneigenaar. Stijlvol,
              duurzaam en met liefde ontworpen.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-white/40 mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-white/40 mb-5">
              Beleid
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-white/40 mb-5">
              Hulp nodig?
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="font-body text-sm text-white/60 hover:text-white transition-colors"
                >
                  Neem contact op
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@dagufi.nl"
                  className="font-body text-sm text-white/60 hover:text-white transition-colors"
                >
                  support@dagufi.nl
                </a>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Veilig betalen", "Gratis retour", "Snelle levering"].map((badge) => (
                <span
                  key={badge}
                  className="text-[10px] font-body tracking-wider uppercase bg-white/10 px-2.5 py-1 text-white/50"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide section-padding py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/30">
            © {currentYear} Dagufi. Alle rechten voorbehouden. · KVK: 94572283
          </p>
          <p className="font-body text-xs text-white/20">
            Ontworpen met ♥ voor jou en jouw hond
          </p>
        </div>
      </div>
    </footer>
  );
}
