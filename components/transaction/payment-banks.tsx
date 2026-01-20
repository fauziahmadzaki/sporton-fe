import { Bank } from "@/types";
import { Card, CardBody, CardHeader, CardTitle } from "../ui/card";
import { PaymentMethod } from "./payment-method";

export const PaymentBanks = ({ banks }: { banks: Bank[] }) => {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Payment Options</CardTitle>
      </CardHeader>
      <CardBody>
        {banks.map((bank) => (
          <PaymentMethod
            key={bank._id}
            bankName={bank.bankName}
            accountNumber={bank.accountNumber}
          />
        ))}
      </CardBody>
    </Card>
  );
};
