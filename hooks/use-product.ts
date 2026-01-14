"use client";
import { ProductsContext } from "@/providers/products-provider";
import { useContext } from "react";

function useProduct() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductsProvider");
  }

  return context;
}

export { useProduct };
