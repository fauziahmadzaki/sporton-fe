"use client";
import { useCartStore } from "@/hooks/use-cart-store";
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "../ui/card";

import { getImageUrl } from "@/lib/api";
import { CartItem, CartTotalPrice } from "../product/product-cart";
import { Button } from "../ui/button";
import { FiCreditCard } from "react-icons/fi";

export const CheckoutCart = () => {
  const { carts, removeFromCart } = useCartStore();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cart Items</CardTitle>
      </CardHeader>
      <CardBody>
        {carts.length == 0 ? (
          <>
            <div className="text-center text-sm py-5">Cart is Empty</div>
          </>
        ) : (
          carts.map((cart) => {
            return (
              <CartItem
                id={cart._id}
                key={cart._id}
                name={cart.name}
                imgUrl={getImageUrl(cart.imageUrl)}
                quantity={cart.quantity}
                price={cart.price}
                removeFromCart={removeFromCart}
              />
            );
          })
        )}
      </CardBody>
      <CardFooter className="mt-auto">
        <div className="p-5 space-y-3.5">
          <CartTotalPrice />
          <Button
            variant="dark"
            className="w-full"
            type="submit"
            form="checkout-form"
            disabled={carts.length == 0}
          >
            <FiCreditCard size={24} /> Proceed To Payment
          </Button>
          {carts.length == 0 && (
            <p className="text-sm text-red-500">
              Please choose the product you want to buy first
            </p>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
