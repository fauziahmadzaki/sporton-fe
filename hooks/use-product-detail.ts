import { getProductById } from "@/services/product-service";
import { Product } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useProductDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<Product | null>(null);
  const [count, setCount] = useState(1);
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      const data = await getProductById(id as string);
      setProduct(data);
      setIsLoading(false);
    };
    getProduct();
  }, [id]);

  const handlerInc = () => {
    if (product!.stock > count) setCount(count + 1);
  };
  const handlerDec = () => {
    if (count > 1) setCount(count - 1);
  };

  return {
    product: product as Product,
    count,
    handlerInc,
    handlerDec,
    setCount,
    isLoading,
  };
};
