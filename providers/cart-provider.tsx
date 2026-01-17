"use client";

import { CartItem } from "@/components/product-cart";
import { createContext, useEffect, useMemo, useReducer } from "react";

export interface CartItem {
  id: string;
  quantity: number;
  price: number;
}

type CartAction =
  | { type: "ADD"; payload: { id: string; quantity: number; price: number } }
  | { type: "REMOVE"; payload: { id: string } }
  | { type: "DECREASE"; payload: { id: string; quantity: number } }
  | {
      type: "SET";
      payload: CartItem[];
    };

interface CartContextProps {
  carts: CartItem[];
  addToCart: (id: string, quantity: number, price: number) => void;
  removeFromCart: (id: string) => void;
  decreaseQuantity: (id: string, quantity: number) => void;
  totalPrice: number;
}

const cartReducer = (state: CartItem[], action: CartAction) => {
  switch (action.type) {
    case "SET":
      return action.payload;
    case "ADD": {
      const { id, price, quantity } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        return state.map((item) =>
          item.id == id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }

      return [...state, { id, price, quantity }];
    }
    case "DECREASE": {
      const { id, quantity } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        return state.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - quantity }
            : item
        );
      }

      return state;
    }

    case "REMOVE": {
      return state.filter((item) => item.id !== action.payload.id);
    }

    default:
      return state;
  }
};

export const CartContext = createContext<CartContextProps | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [carts, dispact] = useReducer(cartReducer, []);
  const totalPrice = useMemo(() => {
    return carts.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [carts]);

  useEffect(() => {
    const stored = localStorage.getItem("carts");
    if (stored) {
      dispact({ type: "SET", payload: JSON.parse(stored) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(carts));
  }, [carts]);

  const addToCart = (id: string, quantity: number, price: number) => {
    dispact({ type: "ADD", payload: { id, quantity, price } });
  };

  const removeFromCart = (id: string) => {
    dispact({ type: "REMOVE", payload: { id } });
  };

  const decreaseQuantity = (id: string, quantity: number) => {
    dispact({ type: "DECREASE", payload: { id, quantity } });
  };

  return (
    <CartContext.Provider
      value={{ carts, addToCart, decreaseQuantity, removeFromCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

// "use client";
// import React, { createContext, useEffect, useState } from "react";

// export interface CartItem {
//   id: string;
//   quantity: number;
//   price: number;
// }

// interface CartContextProps {
//   carts: CartItem[];
//   totalPrice: number;
//   setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
//   addToCart: (id: string, quantity: number, price: number) => void;
//   removeFromCart: (id: string) => void;
//   decreaseQuantity: (id: string, quantity: number) => void;
// }

// const CartContext = createContext<CartContextProps | null>(null);

// const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [carts, setCart] = useState<CartItem[]>([]);
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     const storedCarts = localStorage.getItem("carts");
//     setCart(JSON.parse(storedCarts || "[]"));
//   }, []);

//   useEffect(() => {
//     const sum = carts.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//     localStorage.setItem("carts", JSON.stringify(carts));
//     setTotalPrice(sum);
//   }, [carts]);

//   const addToCart = (id: string, quantity: number, price: number) => {
//     setCart((prev) => {
//       const existingItem = prev.find((item) => item.id === id);
//       if (existingItem) {
//         return prev.map((item) =>
//           item.id === id
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         );
//       } else {
//         return [...prev, { id, quantity, price }];
//       }
//     });
//   };

//   const removeFromCart = (id: string) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   const decreaseQuantity = (id: string, quantity: number) => {
//     setCart((prev) => {
//       const existingItem = prev.find((item) => item.id === id);
//       if (existingItem) {
//         if (existingItem.quantity === 1) {
//           return prev.filter((item) => item.id !== id);
//         } else {
//           return prev.map((item) =>
//             item.id === id
//               ? { ...item, quantity: item.quantity - quantity }
//               : item
//           );
//         }
//       } else {
//         return prev;
//       }
//     });
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         carts,
//         setCart,
//         totalPrice,
//         addToCart,
//         decreaseQuantity,
//         removeFromCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export { CartContext, CartProvider };
