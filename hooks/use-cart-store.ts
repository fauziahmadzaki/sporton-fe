import { Product } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem extends Product {
  quantity: number;
}

interface CustomerInformation {
  customerName: string;
  customerContact: string;
  customerAddress: string;
}

interface CartStore {
  carts: CartItem[];
  customerInformation: CustomerInformation | null;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (id: string) => void;
  decreaseQuantity: (id: string, quantity: number) => void;
  totalPrice: () => number;
  reset: () => void;
  setCustomerInformation: (
    customerName: string,
    customerContact: string,
    customerAddress: string,
  ) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      carts: [],
      customerInformation: null,
      addToCart: (product, quantity) => {
        const existingItem = get().carts.find(
          (item) => item._id === product._id,
        );
        set((state) =>
          existingItem
            ? {
                carts: state.carts.map((item) =>
                  item._id === product._id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item,
                ),
              }
            : { carts: [...state.carts, { ...product, quantity }] },
        );
      },
      removeFromCart: (id: string) => {
        set((state) => ({
          carts: state.carts.filter((item) => item._id !== id),
        }));
      },
      decreaseQuantity: (id: string, quantity: number) => {
        set((state) => ({
          carts: state.carts.map((item) =>
            item._id === id
              ? { ...item, quantity: item.quantity - quantity }
              : item,
          ),
        }));
      },
      totalPrice: () =>
        get().carts.reduce((acc, item) => acc + item.price * item.quantity, 0),
      reset: () => {
        set(() => ({ carts: [] }));
      },
      setCustomerInformation: (
        customerName: string,
        customerContact: string,
        customerAddress: string,
      ) => {
        set(() => ({
          customerInformation: {
            customerName,
            customerContact,
            customerAddress,
          },
        }));
      },
    }),

    {
      name: "carts",
    },
  ),
);
