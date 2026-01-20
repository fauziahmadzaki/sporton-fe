import { CheckoutForm } from "@/components/transaction/checkout-form";
import { CheckoutCart } from "@/components/transaction/checkout-cart";

export default function CheckoutPage() {
  return (
    <>
      <h1 className="text-5xl font-bold text-center mb-10">Checkout Now</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-15.25">
        <CheckoutForm />
        <CheckoutCart />
        <div />
      </div>
    </>
  );
}
