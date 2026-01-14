"use client";
import { ProductsType } from "@/types/product";
import { createContext } from "react";

const ProductsContext = createContext<ProductsType | null>(null);

const productList = [
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 450000,
    imgUrl: "/images/products/shoes-2.png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Running",
    price: 250000,
    imgUrl: "/images/products/racket.png",
  },
  {
    name: "SportsOn Slowlivin",
    category: "Running",
    price: 230000,
    imgUrl: "/images/products/sportshirt-1.png",
  },
  {
    name: "SportsOn HyperSoccer v2",
    category: "Running",
    price: 440000,
    imgUrl: "/images/products/football-shoes-1.png",
  },
  {
    name: "SportsOn HyperSoccer v3",
    category: "Running",
    price: 550000,
    imgUrl: "/images/products/football-shoes-2.png",
  },
  {
    name: "SportsOn Slowlivin v2",
    category: "Running",
    price: 650000,
    imgUrl: "/images/products/sportshirt-2.png",
  },
  {
    name: "SportsOn Hyperfast Shoes v2",
    category: "Running",
    price: 650000,
    imgUrl: "/images/products/shoes-3.png",
  },
  {
    name: "SportsOn Rockets Tennis v2",
    category: "Running",
    price: 650000,
    imgUrl: "/images/products/racket-2.png",
  },
];

function ProductsProvider({ children }: { children: React.ReactNode }) {
  return (
    <ProductsContext.Provider value={{ products: productList }}>
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsContext, ProductsProvider };
