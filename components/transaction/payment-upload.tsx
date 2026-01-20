"use client";
import { FileUploader } from "../ui/file-uploader";
import { CartTotalPrice } from "../product/product-cart";
import { Button } from "../ui/button";
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { FiCheckCircle } from "react-icons/fi";
import { FormEvent, useState } from "react";
import { useCartStore } from "@/hooks/use-cart-store";
import priceFormatter from "@/utils/price-formatter";
import { confirmPayment } from "@/services/transaction-service";
import { useRouter } from "next/navigation";

export const PaymentUpload = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { totalPrice, carts, customerInformation, reset } = useCartStore();
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const purchasedItems = carts.map((cart) => ({
      productId: cart._id,
      qty: cart.quantity,
    }));
    const { customerName, customerContact, customerAddress } =
      customerInformation!;

    try {
      const form = new FormData();
      form.append("customerName", customerName!.toString());
      form.append("totalPayment", String(totalPrice()));
      form.append("customerContact", customerContact!.toString());
      form.append("customerAddress", customerAddress!.toString());
      form.append("purchasedItems", JSON.stringify(purchasedItems));
      form.append("image", file!);
      const res = await confirmPayment(form);
      setIsLoading(false);
      reset();
      router.push(`/order/${res._id}`);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
        console.log(error);
      }
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Steps</CardTitle>
      </CardHeader>
      <CardBody className="p-3.75">
        <ol className="list-decimal pl-3.75 text-xs mb-5">
          <li>
            Transfer the total amount of{" "}
            <strong>
              {typeof window !== "undefined" && priceFormatter(totalPrice())}
            </strong>{" "}
            to your preferred bank account listed under &apos;Payment
            Options&apos; (BCA, Mandiri, or BTPN).
          </li>
          <li>
            After completing the transfer,{" "}
            <strong>keep the payment receipt</strong> or a screenshot of the
            transfer confirmation. This will be needed for the next step.
          </li>
          <li>
            Upload the payment receipt/screenshot using the &apos;
            <strong>Upload Receipt &amp; Confirm</strong>&apos; button below to
            validate your transaction.
          </li>
        </ol>

        <FileUploader
          ext={["png", "jpg", "jpeg"]}
          id="receiptFile"
          name="receipt"
          placeholder="Upload Your Payment Receipt here"
          handleChange={setFile}
        />
      </CardBody>
      <CardFooter>
        <div className="p-5 space-y-3.5">
          <CartTotalPrice />
          <form onSubmit={handleSubmit}>
            <Button
              variant="dark"
              className="w-full"
              type="submit"
              disabled={!file}
            >
              <FiCheckCircle size={24} />{" "}
              {isLoading ? "Uploading..." : "Upload Receipt & Confirm"}
            </Button>
            {!file && (
              <p className="mt-2 text-xs">Please upload your payment receipt</p>
            )}
          </form>
        </div>
      </CardFooter>
    </Card>
  );
};
