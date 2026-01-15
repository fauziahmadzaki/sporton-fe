"use client";

import { useProduct } from "@/hooks/use-product";
import { ProductCard } from "../ui/product-card";

export default function Products() {
  const { products } = useProduct();
  return (
    <section className="px-5 max-w-7xl mx-auto space-y-11">
      <h2 className="italic text-4xl font-bold uppercase text-center">
        <span className="text-primary">Our</span> Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-12">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
