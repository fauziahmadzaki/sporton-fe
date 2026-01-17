"use client";

import { Button } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FiRefreshCcw } from "react-icons/fi";

const messages = {
  pending: {
    title: "Order Submitted !!",
    message:
      "Your Order is recorded in our system, we are still confirming the payment status, please wait and your order status will be updated in less than 12 hours.",
    iconUrl: "/images/icons/cart-check-solid.png",
    bgColor: "bg-blue-500/12",
  },
  success: {
    title: "Order Confirmed !!",
    message:
      "We have received your payment, and your order is currently processed by our staff, just wait until your favorite sportswear arrive in your home. We will contact you in Whatsapp for further shipping updates.",
    iconUrl: "/images/icons/badge-check-solid.png",
    bgColor: "bg-green-500/17",
  },
};

export default function OrderStatusPage() {
  const search = useSearchParams();
  const value = search.get("status");

  const message = messages[value as keyof typeof messages] || messages.pending;

  return (
    <div className="min-h-screen bg-neutral-100 pt-5">
      <h1 className="text-5xl font-bold text-center mb-10">Payment</h1>
      <Card className="max-w-lg mx-auto">
        <CardBody className="py-15 flex flex-col items-center justify-center px-16 gap-2">
          <div
            className={`aspect-square size-30 ${message.bgColor} rounded-full flex justify-center items-center`}
          >
            <Image
              src={message.iconUrl}
              alt={message.title}
              width={84}
              height={84}
            />
          </div>
          <h2 className="text-2xl font-bold">{message.title}</h2>
          <p className="text-center">{message.message}</p>

          {!value && (
            <Button variant="dark" className="w-full" asChild>
              <Link href={"/order-status?status=success"}>
                <FiRefreshCcw />
                Refresh Status
              </Link>
            </Button>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
