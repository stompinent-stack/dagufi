import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

const shopLinks = [
  { label: "Alle producten", href: "/products" },
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
      {/* Main footer */}
      <div className="container-wide section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-display text-2xl tracking-[0.2em] text-white mb-4 inline-block"
            >
              DAGUFI
            </Link>
            <p className="font-body text-sm text-white/50 leading-relaxed mt-3 mb-6">
              Premium hondenaccessoires voor de moderne hondeneigenaar. Stijlvol,
              duurzaam en met liefde ontworpen.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/dagufi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-gold-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com/dagufi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-gold-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
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

          {/* Legal */}
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

          {/* Contact */}
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
                  href="mailto:support@dagufi.com"
                  className="font-body text-sm text-white/60 hover:text-white transition-colors"
                >
                  support@dagufi.com
                </a>
              </li>
            </ul>
            {/* Trust badges */}
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

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-wide section-padding py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/30">
            © {currentYear} Dagufi. Alle rechten voorbehouden.
          </p>
          <p className="font-body text-xs text-white/20">
            Ontworpen met ♥ voor jou en jouw hond
          </p>
        </div>
      </div>
    </footer>
  );
}
