import { getImageUrl } from "@/lib/api";
import priceFormatter from "@/utils/price-formatter";
import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

interface ProductCardProps {
  _id: string;
  name: string;
  imageUrl: string;
  category: string;
  price: number;
  onClick: () => void;
}

export const ProductCard = ({
  _id,
  name,
  price,
  category,
  imageUrl,
  onClick,
}: ProductCardProps) => {
  return (
    <div className="p-2 shadow-sm space-y-4 relative">
      <Link href={`/product/${_id}`} className="cursor-pointer">
        <div className="h-75 bg-primary-light flex justify-center items-center">
          <Image
            width={200}
            height={200}
            alt={name}
            src={getImageUrl(imageUrl)}
          />
        </div>
        <div className="space-y-1.5">
          <p className="text-lg">{name}</p>
          <div className="flex justify-between">
            <p className="text-sm text-neutral-400">{category}</p>
            <p className="text-base text-primary">
              Rp. {priceFormatter(price)}
            </p>
          </div>
        </div>
      </Link>
      <div className="aspect-square size-8 bg-primary flex justify-center items-center text-white absolute top-4 right-4">
        <button onClick={onClick}>
          <FiPlus size={24} />
        </button>
      </div>
    </div>
  );
};
