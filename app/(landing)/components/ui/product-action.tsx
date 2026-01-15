import { Button } from "./button";
import {
  FiChevronUp,
  FiChevronDown,
  FiShoppingBag,
  FiArrowRight,
} from "react-icons/fi";

export const ProductAction = ({
  count,
  id,
  handlerInc,
  handlerDec,
}: {
  count: number;
  id: string;
  handlerInc?: () => void;
  handlerDec?: () => void;
}) => {
  return (
    <div className="flex flex-wrap xl:flex-nowrap gap-5 items-stretch">
      <div className="min-h-15 flex items-stretch">
        <p className="h-full w-13.5 flex justify-center items-center text-[20px] font-semibold border-2 border-gray-200 border-r-0">
          {count}
        </p>
        <div className="h-full grid grid-rows-2">
          <button
            className="flex justify-center items-center border-2 border-gray-200 px-3 cursor-pointer"
            onClick={handlerInc}
          >
            <FiChevronUp />
          </button>
          <button
            className="flex justify-center items-center border-2 border-gray-200 border-t-0 cursor-pointer"
            onClick={handlerDec}
          >
            <FiChevronDown />
          </button>
        </div>
      </div>
      <Button className="w-full">
        <FiShoppingBag size={24} />
        Add To Cart
      </Button>
      <Button className="w-full" variant="dark">
        Checkout Now
        <FiArrowRight size={24} />
      </Button>
    </div>
  );
};
