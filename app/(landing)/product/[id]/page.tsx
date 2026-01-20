"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import priceFormatter from "@/utils/price-formatter";
import { ProductAction } from "@/components/product/product-action";
import { getImageUrl } from "@/lib/api";
import { useProductDetail } from "@/hooks/use-product-detail";
import { Loading } from "@/components/ui/loading";

export default function ProductDetail() {
  const { count, product, handlerDec, handlerInc, setCount, isLoading } =
    useProductDetail();
  console.log(product);

  if (isLoading) return <Loading />;

  return (
    <div className="px-5 lg:px-10  xl:max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start  gap-11.25 mt-10 pb-35">
      <div className="aspect-square w-full max-w-[500px] bg-primary-light flex justify-center items-center">
        <Image
          width={400}
          height={200}
          src={getImageUrl(product.imageUrl)}
          alt={product.name}
        />
      </div>
      <div className="flex-1 space-y-4.5">
        <h1 className="text-5xl font-bold">{product.name}</h1>
        <Badge>{product.category.name}</Badge>
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
        <p className="text-lg">Stocks : {product.stock}</p>
        <ProductAction
          count={count}
          product={product}
          handlerDec={handlerDec}
          handlerInc={handlerInc}
          handlerReset={setCount}
        />
      </div>
    </div>
  );
}
