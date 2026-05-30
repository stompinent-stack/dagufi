// Global cart state using Zustand (persisted in localStorage)

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Cart } from "@/types/shopify";
import {
  createCart,
  addToCart,
  updateCartLine,
  removeCartLine,
  getCart,
} from "./api";

interface CartStore {
  cart: Cart | null;
  cartOpen: boolean;
  loading: boolean;
  error: string | null;

  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;

  addItem: (variantId: string, quantity?: number) => Promise<void>;
  updateItem: (lineId: string, quantity: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
  refreshCart: () => Promise<void>;
  clearError: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: null,
      cartOpen: false,
      loading: false,
      error: null,

      openCart: () => set({ cartOpen: true }),
      closeCart: () => set({ cartOpen: false }),
      toggleCart: () => set((s) => ({ cartOpen: !s.cartOpen })),
      clearError: () => set({ error: null }),

      addItem: async (variantId, quantity = 1) => {
        set({ loading: true, error: null });
        try {
          const { cart } = get();
          let updatedCart: Cart;

          if (!cart) {
            updatedCart = await createCart(variantId, quantity);
          } else {
            updatedCart = await addToCart(cart.id, variantId, quantity);
          }

          set({ cart: updatedCart, loading: false, cartOpen: true });
        } catch (err) {
          set({
            loading: false,
            error: err instanceof Error ? err.message : "Fout bij toevoegen",
          });
        }
      },

      updateItem: async (lineId, quantity) => {
        const { cart } = get();
        if (!cart) return;

        set({ loading: true, error: null });
        try {
          const updatedCart = await updateCartLine(cart.id, lineId, quantity);
          set({ cart: updatedCart, loading: false });
        } catch (err) {
          set({
            loading: false,
            error: err instanceof Error ? err.message : "Fout bij bijwerken",
          });
        }
      },

      removeItem: async (lineId) => {
        const { cart } = get();
        if (!cart) return;

        set({ loading: true, error: null });
        try {
          const updatedCart = await removeCartLine(cart.id, lineId);
          set({ cart: updatedCart, loading: false });
        } catch (err) {
          set({
            loading: false,
            error: err instanceof Error ? err.message : "Fout bij verwijderen",
          });
        }
      },

      refreshCart: async () => {
        const { cart } = get();
        if (!cart) return;

        try {
          const refreshed = await getCart(cart.id);
          if (refreshed) set({ cart: refreshed });
        } catch {
          // Silently fail — cart will be recreated on next add
        }
      },
    }),
    {
      name: "dagufi-cart",
      partialize: (state) => ({
        cart: state.cart ? { ...state.cart, lines: state.cart.lines ?? [] } : null,
      }),
    }
  )
);

// Selector helpers
export const useCartCount = () =>
  useCartStore((s) =>
    s.cart?.lines?.reduce((sum, line) => sum + line.quantity, 0) ?? 0
  );
