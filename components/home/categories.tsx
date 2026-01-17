import { FiArrowRight } from "react-icons/fi";

import Link from "next/link";
import { CategoryCard } from "../ui/category-card";

const categories = [
  {
    name: "Running",
    image: "/images/categories/category-running.png",
    size: 86,
  },
  {
    name: "Tennis",
    image: "/images/categories/category-tennis.png",
    size: 76,
  },
  {
    name: "Basketball",
    image: "/images/categories/category-basketball.png",
    size: 77,
  },
  {
    name: "Football",
    image: "/images/categories/category-football.png",
    size: 84,
  },
  {
    name: "Badminton",
    image: "/images/categories/category-badminton.png",
    size: 98,
  },
  {
    name: "Swimming",
    image: "/images/categories/category-swimming.png",
    size: 76,
  },
];

export default function Categories() {
  return (
    <div className="px-5 lg:px-0 max-w-7xl mx-auto space-y-6">
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
          <CategoryCard key={category.name} {...category} />
        ))}
      </div>
    </div>
  );
}
