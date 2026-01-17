import Hero from "@/components/home/hero";
import Categories from "@/components/home/categories";
import Products from "@/components/home/products";

export default function Home() {
  return (
    <main className="w-full space-y-30 pb-35">
      <Hero />
      <Categories />
      <Products />
    </main>
  );
}
