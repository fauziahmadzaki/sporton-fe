"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { Card, CardBody, CardHeader, CardTitle } from "../ui/card";
import { InputGroup } from "../ui/input-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { customerSchema, CustomerType } from "@/lib/zod";
import { useCartStore } from "@/hooks/use-cart-store";
import { Controller } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const CheckoutForm = () => {
  const router = useRouter();
  const { customerInformation, setCustomerInformation } = useCartStore();

  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      customerName: "",
      customerContact: "",
      customerAddress: "",
    },
  });

  useEffect(() => {
    if (customerInformation) {
      reset({
        customerName: customerInformation?.customerName || "",
        customerAddress: customerInformation?.customerAddress || "",
        customerContact: customerInformation?.customerContact || "",
      });
    }
  }, [customerInformation, reset]);

  const onSubmit: SubmitHandler<CustomerType> = (data) => {
    const { customerName, customerAddress, customerContact } = data;
    setCustomerInformation(customerName, customerContact, customerAddress);
    router.push("/payment");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Information</CardTitle>
      </CardHeader>
      <CardBody>
        <form
          id="checkout-form"
          className="px-5 py-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="customerName"
            control={control}
            render={({ field, fieldState }) => (
              <InputGroup
                placeholder="Type Your Full Name"
                label="Full Name"
                value={field.value}
                onChange={field.onChange}
                errorMessage={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="customerContact"
            control={control}
            render={({ field, fieldState }) => (
              <InputGroup
                placeholder="+62xxxx"
                label="Whatsapp Number"
                onChange={field.onChange}
                value={field.value}
                errorMessage={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="customerAddress"
            control={control}
            render={({ field, fieldState }) => (
              <InputGroup
                placeholder="Example Street, 18, West Jakarta, Indonesia, 66521"
                label="Shipping Address"
                type="textarea"
                onChange={field.onChange}
                value={field.value}
                errorMessage={fieldState.error?.message}
              />
            )}
          />
        </form>
      </CardBody>
    </Card>
  );
};
