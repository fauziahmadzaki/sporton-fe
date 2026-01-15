"use client";
import { ProductsType } from "@/types/product";
import { createContext } from "react";

const ProductsContext = createContext<ProductsType | null>(null);

const productList = [
  {
    id: "cku1x9a2d0001runshoes",
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 450000,
    imgUrl: "/images/products/shoes-2.png",
    description:
      "Lightweight running shoes designed for maximum speed and comfort.",
  },
  {
    id: "cku1x9a2d0002runracket",
    name: "SportsOn Rockets Tennis",
    category: "Running",
    price: 250000,
    imgUrl: "/images/products/racket.png",
    description:
      "High-performance tennis racket with excellent grip and balance.",
  },
  {
    id: "cku1x9a2d0003runshirt",
    name: "SportsOn Slowlivin",
    category: "Running",
    price: 230000,
    imgUrl: "/images/products/sportshirt-1.png",
    description:
      "Breathable sports shirt suitable for daily training and workouts.",
  },
  {
    id: "cku1x9a2d0004runsoccer",
    name: "SportsOn HyperSoccer v2",
    category: "Running",
    price: 440000,
    imgUrl: "/images/products/football-shoes-1.png",
    description: "Soccer shoes with enhanced traction and foot stability.",
  },
  {
    id: "cku1x9a2d0005runsoccer",
    name: "SportsOn HyperSoccer v3",
    category: "Running",
    price: 550000,
    imgUrl: "/images/products/football-shoes-2.png",
    description: "Latest generation soccer shoes built for speed and control.",
  },
  {
    id: "cku1x9a2d0006runshirt",
    name: "SportsOn Slowlivin v2",
    category: "Running",
    price: 650000,
    imgUrl: "/images/products/sportshirt-2.png",
    description:
      "Premium sports shirt with improved airflow and stretch fabric.",
  },
  {
    id: "cku1x9a2d0007runshoes",
    name: "SportsOn Hyperfast Shoes v2",
    category: "Running",
    price: 650000,
    imgUrl: "/images/products/shoes-3.png",
    description:
      "Upgraded running shoes with better cushioning and durability.",
  },
  {
    id: "cku1x9a2d0008runracket",
    name: "SportsOn Rockets Tennis v2",
    category: "Running",
    price: 650000,
    imgUrl: "/images/products/racket-2.png",
    description:
      "Advanced tennis racket for professional and competitive players.",
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
