import { ProductType } from "@/types/product";
import priceFormatter from "@/utils/price-formatter";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";

function ProductCard({ name, category, imgUrl, price }: ProductType) {
  return (
    <div className="p-2 shadow-sm space-y-4">
      <div className="h-75 bg-primary-light flex justify-center items-center relative">
        <Image width={200} height={200} alt={name} src={imgUrl} />
        <div className="aspect-square size-8 bg-primary flex justify-center items-center text-white absolute top-2 right-2">
          <FiPlus size={24} />
        </div>
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
