"use client";

import { CartItem, CartTotalPrice } from "@/components/product-cart";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TextArea } from "@/components/ui/textarea";
import { useCart } from "@/hooks/use-cart";
import { useProduct } from "@/hooks/use-product";
import Link from "next/link";
import { FiCreditCard } from "react-icons/fi";

export default function CheckoutPage() {
  const { carts, removeFromCart, totalPrice } = useCart();
  const { products } = useProduct();
  return (
    <div className="min-h-screen bg-neutral-100 pt-5 px-5 lg:px-0 pb-35">
      <h1 className="text-5xl font-bold text-center mb-10">Checkout Now</h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-15.25">
        <Card>
          <CardHeader>
            <CardTitle>Order Information</CardTitle>
          </CardHeader>
          <CardBody>
            <form action="" className="px-5 py-5">
              <div className="mb-5">
                <Label>Full Name</Label>
                <Input placeholder="Type Your Fullname" />
              </div>
              <div className="mb-5">
                <Label>Whatsapp Number</Label>
                <Input placeholder="+62xxxx" />
              </div>
              <div className="mb-5">
                <Label>Shipping Address</Label>
                <TextArea
                  name=""
                  id=""
                  placeholder="Example Street, 18, West Jakarta, Indonesia, 66521"
                ></TextArea>
              </div>
            </form>
          </CardBody>
        </Card>

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
          </CardBody>
          <CardFooter className="mt-auto">
            <div className="p-5 space-y-3.5">
              <CartTotalPrice totalPrice={totalPrice} />
              <Button variant="dark" className="w-full" asChild>
                <Link href={"/payment"}>
                  <FiCreditCard size={24} /> Proceed To Payment
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
        <div />
      </div>
    </div>
  );
}
