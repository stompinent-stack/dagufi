import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-50">
      <div className="text-center space-y-6 px-4">
        <p className="font-display text-[120px] font-light text-gold-300/50 leading-none">
          404
        </p>
        <h1 className="font-display text-3xl font-light text-charcoal-900">
          Pagina niet gevonden
        </h1>
        <p className="font-body text-base text-charcoal-900/50 max-w-sm mx-auto">
          De pagina die je zoekt bestaat niet of is verplaatst.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            Terug naar home
            <ArrowRight size={16} />
          </Link>
          <Link href="/products" className="btn-secondary">
            Bekijk producten
          </Link>
        </div>
      </div>
    </div>
  );
}
