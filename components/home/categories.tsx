import { FiArrowRight } from "react-icons/fi";

import Link from "next/link";
import { CategoryCard } from "../ui/category-card";
import { Category } from "@/types";
import { getImageUrl } from "@/lib/api";

export default function Categories({ categories }: { categories: Category[] }) {
  return (
    <section className="px-5 lg:px-0 max-w-7xl mx-auto space-y-6" id="category">
      <div className="flex justify-between ">
        <h2 className="font-bold text-2xl">Browse By Categories</h2>
        <Link
          href={"/"}
          className="text-primary inline-flex items-center gap-1"
        >
          See All Categories
          <FiArrowRight size={16} />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 w-full gap-6 md:gap-11.5 justify-center">
        {categories.map((category) => (
          <CategoryCard
            key={category._id}
            name={category.name}
            image={getImageUrl(category.imageUrl)}
          />
        ))}
      </div>
    </section>
  );
}
