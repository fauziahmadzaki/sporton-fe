import Categories from "@/components/home/categories";
import Hero from "@/components/home/hero";
import Products from "@/components/home/products";
import { Loading } from "@/components/ui/loading";
import { getAllCategories } from "@/services/category-service";
import { getAllProducts } from "@/services/product-service";
import { Suspense } from "react";

export default async function Home() {
  const [categories, products] = await Promise.all([
    getAllCategories(),
    getAllProducts(),
  ]);

  return (
    <main className="w-full space-y-30 pb-35">
      <Suspense fallback={<Loading />}>
        <Hero />
        <Categories categories={categories} />
        <Products products={products} />
      </Suspense>
    </main>
  );
}
