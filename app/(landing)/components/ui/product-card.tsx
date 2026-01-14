import { ProductType } from "@/types/product";
import priceFormatter from "@/utils/price-formatter";
import Image from "next/image";

function ProductCard({ name, category, imgUrl, price }: ProductType) {
  return (
    <div className="p-2 shadow-sm space-y-4">
      <div className="h-75 bg-primary-light flex justify-center items-center">
        <Image width={200} height={200} alt={name} src={imgUrl} />
      </div>
      <div className="space-y-1.5">
        <p className="text-lg">{name}</p>
        <div className="flex justify-between">
          <p className="text-sm text-neutral-400">{category}</p>
          <p className="text-base text-primary">Rp. {priceFormatter(price)}</p>
        </div>
      </div>
    </div>
  );
}

export { ProductCard };
