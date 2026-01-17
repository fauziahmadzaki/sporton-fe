"use client";

import { FiArrowRight, FiShoppingBag, FiTrash2 } from "react-icons/fi";
import { SmallBadge } from "./ui/badge";
import { Divider } from "./ui/divider";
import priceFormatter from "@/utils/price-formatter";
import { Button } from "./ui/button";
import Image from "next/image";
import { useCart } from "@/hooks/use-cart";
import { useProduct } from "@/hooks/use-product";
import { CartItem as CartItemProps } from "@/providers/cart-provider";
import { ProductType } from "@/types/product";
import { useState } from "react";
import Link from "next/link";

export const ProductCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { carts, removeFromCart, totalPrice } = useCart();
  const { products } = useProduct();
  return (
    <div className="relative cursor-pointer group">
      <FiShoppingBag
        size={24}
        className="text-dark group-hover:text-primary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      />
      {carts.length > 0 && <SmallBadge>{carts.length}</SmallBadge>}

      {isOpen && (
        <Cart
          carts={carts}
          products={products}
          totalPrice={totalPrice}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
};

export const Cart = ({
  carts,
  products,
  removeFromCart,
  totalPrice,
}: {
  carts: CartItemProps[];
  products: ProductType[];
  removeFromCart: (id: string) => void;
  totalPrice: number;
}) => {
  return (
    <div className="absolute bg-white w-sm z-50 right-0 top-10 shadow-lg border border-gray-200">
      <h3 className="font-bold text-center p-2.5">Shopping Cart</h3>
      <Divider />

      {carts.length == 0 ? (
        <>
          <div className="text-center text-sm py-5">Cart is Empty</div>
          <Divider />
        </>
      ) : (
        carts.map((cart) => {
          return products.map((product) => {
            if (product.id === cart.id) {
              return (
                <CartItem
                  id={cart.id}
                  key={cart.id}
                  name={product.name}
                  imgUrl={product.imgUrl}
                  quantity={cart.quantity}
                  price={product.price}
                  removeFromCart={removeFromCart}
                />
              );
            }
          });
        })
      )}

      <div className="w-full p-2.5 space-y-4">
        <CartTotalPrice totalPrice={totalPrice} />
        {carts.length > 0 && (
          <Button variant="dark" className="w-full" asChild>
            <Link href={"/checkout"}>
              Checkout Now <FiArrowRight size={24} />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export const CartItem = ({
  id,
  name,
  imgUrl,
  quantity,
  price,
  removeFromCart,
}: {
  id: string;
  name: string;
  imgUrl: string;
  quantity: number;
  price: number;
  removeFromCart: (id: string) => void;
}) => {
  return (
    <div className="w-full">
      <div className="w-full p-2.5 px-5 flex gap-2.25 items-center justify-between">
        <div className="flex gap-2.25 items-center">
          <div className="aspect-square size-[63px] bg-neutral-100 flex  justify-center items-center">
            <Image src={imgUrl} width={50} height={60} alt={name} />
          </div>
          <div>
            <p className="text-sm font-semibold">{name}</p>
            <div className="flex gap-1.5">
              <p className="text-sm font-semibold">{quantity} x</p>
              <p className="text-sm text-primary">
                Rp. {priceFormatter(price)}
              </p>
            </div>
          </div>
        </div>
        <button className=" block" onClick={() => removeFromCart(id)}>
          <FiTrash2 size={20} />
        </button>
      </div>
      <Divider />
    </div>
  );
};

export const CartTotalPrice = ({ totalPrice }: { totalPrice: number }) => {
  return (
    <div className="flex justify-between">
      <p className="text-sm font-semibold">Total</p>
      <p className="text-xs text-primary font-semibold">
        Rp. {priceFormatter(totalPrice)}
      </p>
    </div>
  );
};
