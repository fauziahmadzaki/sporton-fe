"use client";

import { Product } from "@/types";
import { ProductCard } from "../product/product-card";
import { useCartStore } from "@/hooks/use-cart-store";

export default function Products({ products }: { products: Product[] }) {
  const { addToCart } = useCartStore();
  return (
    <section className="px-5 max-w-7xl mx-auto space-y-11" id="product">
      <h2 className="italic text-4xl font-bold uppercase text-center">
        <span className="text-primary">Our</span> Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-12">
        {products.map((product) => (
          <ProductCard
            _id={product._id}
            key={product._id}
            name={product.name}
            category={product.category.name}
            price={product.price}
            imageUrl={product.imageUrl}
            onClick={() => addToCart(product, 1)}
          />
        ))}
      </div>
    </section>
  );
}
