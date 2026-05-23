"use client";

import { useState } from "react";
import { ShoppingBag, Loader2, Check } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { cn } from "@/lib/utils";

interface AddToCartButtonProps {
  variantId: string;
  available: boolean;
  quantity?: number;
  className?: string;
  variant?: "primary" | "gold";
}

export function AddToCartButton({
  variantId,
  available,
  quantity = 1,
  className,
  variant = "primary",
}: AddToCartButtonProps) {
  const { addItem, loading } = useCartStore();
  const [added, setAdded] = useState(false);

  const handleAdd = async () => {
    if (!available || loading || added) return;
    await addItem(variantId, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!available) {
    return (
      <button
        disabled
        className={cn(
          "btn-secondary w-full opacity-50 cursor-not-allowed",
          className
        )}
      >
        Uitverkocht
      </button>
    );
  }

  const baseClass = variant === "gold" ? "btn-gold" : "btn-primary";

  return (
    <button
      onClick={handleAdd}
      disabled={loading || added}
      className={cn(baseClass, "w-full", className)}
      aria-label="Toevoegen aan winkelwagen"
    >
      {loading ? (
        <>
          <Loader2 size={16} className="animate-spin" />
          Toevoegen...
        </>
      ) : added ? (
        <>
          <Check size={16} />
          Toegevoegd!
        </>
      ) : (
        <>
          <ShoppingBag size={16} />
          Toevoegen aan winkelwagen
        </>
      )}
    </button>
  );
}
