import { getAllBanks } from "@/services/bank-service";
import { PaymentUpload } from "@/components/transaction/payment-upload";
import { PaymentBanks } from "@/components/transaction/payment-banks";

export default async function PaymentPage() {
  const banks = await getAllBanks();
  return (
    <>
      <h1 className="text-5xl font-bold text-center mb-10">Payment</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-15.25">
        <PaymentBanks banks={banks} />
        <PaymentUpload />
      </div>
    </>
  );
}
