import { Suspense } from "react";
import OrderStatusDisplay from "./_components/order-status";
import { CgSpinner } from "react-icons/cg";

export default function OrderStatusPage() {
  return (
    <Suspense fallback={null}>
      <OrderStatusDisplay />
    </Suspense>
  );
}

export const runtime = "edge";
