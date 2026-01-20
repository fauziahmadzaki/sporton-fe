import { Divider } from "@/components/ui/divider";
import { FiCreditCard } from "react-icons/fi";

export const PaymentMethod = ({
  bankName,
  category = "Bank Transfer",
  accountNumber,
}: {
  bankName?: string;
  category?: string;
  accountNumber?: string;
}) => {
  return (
    <div>
      <div className="p-6 flex gap-4.5">
        <div className="aspect-square size-12.5 bg-[#DDEEFF] flex justify-center items-center  text-[#0C58D3]">
          <FiCreditCard size={24} />
        </div>
        <div className="flex justify-between w-full">
          <div>
            <p className="font-bold">{bankName}</p>
            <p className="text-sm">{accountNumber}</p>
          </div>
          <div className="bg-[#DDEEFF]  text-black text-sm h-fit px-2.5 py-0.5">
            {category}
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
};
