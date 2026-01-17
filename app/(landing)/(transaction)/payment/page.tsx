"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FiCheckCircle } from "react-icons/fi";
import { PaymentMethod } from "@/components/payment-method";
import { CartTotalPrice } from "@/components/product-cart";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import { FileUploader } from "@/components/file-uploader";

const paymentMethods = [
  {
    name: "BCA",
    creditNumber: "0123182312",
    category: "Bank Transfer",
  },
  {
    name: "Mandiri",
    creditNumber: "83923912013203123",
    category: "Bank Transfer",
  },
  {
    name: "BTPN",
    creditNumber: "5238218923",
    category: "Bank Transfer",
  },
];

export default function PaymentPage() {
  const { totalPrice } = useCart();
  return (
    <div className="min-h-screen bg-neutral-100 pt-5 px-5 lg:px-0 pb-35">
      <h1 className="text-5xl font-bold text-center mb-10">Payment</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-15.25">
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Payment Options</CardTitle>
          </CardHeader>
          <CardBody>
            {paymentMethods.map((method) => (
              <PaymentMethod
                key={method.name}
                name={method.name}
                creditNumber={method.creditNumber}
                category={method.category}
              />
            ))}
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Steps</CardTitle>
          </CardHeader>
          <CardBody className="p-3.75">
            <ol className="list-decimal pl-3.75 text-xs mb-5">
              <li>
                Transfer the total amount of <strong>Rp. 1.035.000</strong> to
                your preferred bank account listed under &apos;Payment
                Options&apos; (BCA, Mandiri, or BTPN).
              </li>
              <li>
                After completing the transfer,{" "}
                <strong>keep the payment receipt</strong> or a screenshot of the
                transfer confirmation. This will be needed for the next step.
              </li>
              <li>
                Upload the payment receipt/screenshot using the &apos;
                <strong>Upload Receipt &amp; Confirm</strong>&apos; button below
                to validate your transaction.
              </li>
            </ol>

            <FileUploader
              id="receiptFile"
              name="receipt"
              placeholder="Upload Your Payment Receipt here"
            />
          </CardBody>
          <CardFooter>
            <div className="p-5 space-y-3.5">
              <CartTotalPrice totalPrice={totalPrice} />
              <Button variant="dark" className="w-full" asChild>
                <Link href={"/order-status"}>
                  <FiCheckCircle size={24} /> Upload Receipt &amp; Confirm
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
