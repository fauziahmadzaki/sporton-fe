"use client";
import { useProduct } from "@/hooks/use-product";
import { slugify } from "@/utils/slugify";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import priceFormatter from "@/utils/price-formatter";
import { ProductAction } from "@/components/product-action";
import { useState } from "react";

export default function ProductDetail() {
  const [count, setCount] = useState(1);

  const { id } = useParams();
  const { products } = useProduct();
  const product = products.find(
    (product) => slugify(product.id) === (id as string),
  );
  if (!product) return <div>Product not found</div>;

  const handlerInc = () => setCount(count + 1);
  const handlerDec = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="px-5 lg:px-10  xl:max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start  gap-11.25 mt-10 pb-35">
      <div className="aspect-square w-full max-w-[500px] bg-primary-light flex justify-center items-center">
        <Image
          width={400}
          height={200}
          src={product.imgUrl}
          alt={product.name}
        />
      </div>
      <div className="flex-1 space-y-4.5">
        <h1 className="text-5xl font-bold">{product.name}</h1>
        <Badge>{product.category}</Badge>
        <p className="leading-loose mb-8">
          The SportsOn HyperSoccer v2 is engineered for the player who demands
          precision, power, and unrivaled speed on the pitch. Featuring a
          striking, two-toned black and white design with deep crimson accents,
          these cleats don&apos;t just perform—they make a statement. Experience
          the future of football footwear with v2&apos;s enhanced fit and
          cutting-edge traction.
        </p>
        <p className="text-[32px] text-primary font-semibold">
          Rp. {priceFormatter(product.price)}
        </p>
        <ProductAction
          count={count}
          id={product.id}
          handlerDec={handlerDec}
          handlerInc={handlerInc}
          handlerReset={setCount}
          price={product.price}
        />
      </div>
    </div>
  );
}
