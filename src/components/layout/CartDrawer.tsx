"use client";

import { X, ShoppingBag, Minus, Plus, Trash2, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/lib/store";
import { formatPrice } from "@/lib/normalise";
import { cn } from "@/lib/utils";

export function CartDrawer() {
  const { cart, cartOpen, closeCart, loading, updateItem, removeItem } =
    useCartStore();

  const isEmpty = !cart || !cart.lines || cart.lines.length === 0;

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-50 cart-overlay bg-charcoal-900/60 transition-opacity duration-300",
          cartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] bg-white flex flex-col transition-transform duration-300 ease-in-out",
          cartOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Winkelwagen"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream-200">
          <h2 className="font-display text-xl font-light tracking-wide">
            Winkelwagen
            {cart && cart.lines && cart.lines.length > 0 && (
              <span className="font-body text-sm font-normal text-charcoal-900/40 ml-2">
                ({cart.lines.reduce((s, l) => s + l.quantity, 0)} items)
              </span>
            )}
          </h2>
          <button
            onClick={closeCart}
            className="p-2 text-charcoal-900/50 hover:text-charcoal-900 transition-colors"
            aria-label="Sluit winkelwagen"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {isEmpty ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 px-6">
              <ShoppingBag size={48} strokeWidth={1} className="text-charcoal-900/20" />
              <p className="font-body text-base text-charcoal-900/40">
                Je winkelwagen is leeg
              </p>
              <Link
                href="/products"
                onClick={closeCart}
                className="btn-primary text-xs mt-2"
              >
                Bekijk producten
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-cream-200">
              {cart!.lines.map((line) => (
                <li key={line.id} className="flex gap-4 p-5">
                  <div className="relative w-20 h-20 bg-cream-100 flex-shrink-0">
                    {line.image ? (
                      <Image
                        src={line.image.url}
                        alt={line.image.altText ?? line.productTitle}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    ) : (
                      <div className="w-full h-full bg-cream-200" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/products/${line.productHandle}`}
                      onClick={closeCart}
                      className="font-body text-sm font-medium text-charcoal-900 line-clamp-1 hover:text-gold-500 transition-colors"
                    >
                      {line.productTitle}
                    </Link>
                    {line.variantTitle !== "Default Title" && (
                      <p className="font-body text-xs text-charcoal-900/40 mt-0.5">
                        {line.variantTitle}
                      </p>
                    )}
                    <p className="font-body text-sm font-medium text-charcoal-900 mt-1">
                      {formatPrice(line.totalAmount, line.currencyCode)}
                    </p>

                    <div className="flex items-center gap-3 mt-2.5">
                      <div className="flex items-center border border-cream-300">
                        <button
                          onClick={() =>
                            line.quantity > 1
                              ? updateItem(line.id, line.quantity - 1)
                              : removeItem(line.id)
                          }
                          disabled={loading}
                          className="w-8 h-8 flex items-center justify-center text-charcoal-900/60 hover:text-charcoal-900 transition-colors disabled:opacity-40"
                          aria-label="Verminder aantal"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center font-body text-sm">
                          {line.quantity}
                        </span>
                        <button
                          onClick={() => updateItem(line.id, line.quantity + 1)}
                          disabled={loading}
                          className="w-8 h-8 flex items-center justify-center text-charcoal-900/60 hover:text-charcoal-900 transition-colors disabled:opacity-40"
                          aria-label="Verhoog aantal"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(line.id)}
                        disabled={loading}
                        className="text-charcoal-900/30 hover:text-red-500 transition-colors disabled:opacity-40"
                        aria-label="Verwijder item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {!isEmpty && cart && (
          <div className="border-t border-cream-200 p-5 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between font-body text-sm text-charcoal-900/60">
                <span>Subtotaal</span>
                <span>{formatPrice(cart.subtotal, cart.currencyCode)}</span>
              </div>
              <div className="flex justify-between font-body text-sm text-charcoal-900/40">
                <span>Verzending</span>
                <span>Berekend bij checkout</span>
              </div>
              <div className="flex justify-between font-display text-lg font-medium pt-2 border-t border-cream-200">
                <span>Totaal</span>
                <span>{formatPrice(cart.total, cart.currencyCode)}</span>
              </div>
            </div>

            <a
              href={cart.checkoutUrl}
              className={cn(
                "btn-primary w-full text-center",
                loading && "opacity-60 pointer-events-none"
              )}
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Laden...
                </>
              ) : (
                "Afrekenen"
              )}
            </a>

            <p className="text-center font-body text-xs text-charcoal-900/30">
              Veilig betalen via Shopify - iDEAL, Creditcard, PayPal
            </p>
          </div>
        )}
      </div>
    </>
  );
}
