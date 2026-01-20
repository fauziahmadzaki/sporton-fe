"use client";
import { Button } from "../ui/button";
import {
  FiChevronUp,
  FiChevronDown,
  FiShoppingBag,
  FiArrowRight,
} from "react-icons/fi";
import { redirect } from "next/navigation";
import { useCartStore } from "@/hooks/use-cart-store";
import { Product } from "@/types";

export const ProductAction = ({
  count,
  product,
  handlerInc,
  handlerDec,
  handlerReset,
}: {
  count: number;
  product: Product;
  handlerInc?: () => void;
  handlerDec?: () => void;
  handlerReset: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { addToCart } = useCartStore();

  return (
    <div className="flex flex-wrap xl:flex-nowrap gap-5 items-stretch">
      <div className="min-h-15 flex items-stretch">
        <p className="h-full w-13.5 flex justify-center items-center text-[20px] font-semibold border-2 border-gray-200 border-r-0">
          {count}
        </p>
        <div className="h-full grid grid-rows-2">
          <button
            className="flex justify-center items-center border-2 border-gray-200 px-3 cursor-pointer hover:bg-neutral-200"
            onClick={handlerInc}
          >
            <FiChevronUp />
          </button>
          <button
            className="flex justify-center items-center border-2 border-gray-200 border-t-0 cursor-pointer hover:bg-neutral-200 "
            onClick={handlerDec}
          >
            <FiChevronDown />
          </button>
        </div>
      </div>
      <Button
        className="w-full"
        onClick={() => {
          addToCart(product, count);
          handlerReset(1);
        }}
      >
        <FiShoppingBag size={24} />
        Add To Cart
      </Button>
      <Button
        className="w-full"
        variant="dark"
        onClick={() => {
          addToCart(product, count);
          redirect("/checkout");
        }}
      >
        Checkout Now
        <FiArrowRight size={24} />
      </Button>
    </div>
  );
};
