import z from "zod";

export const customerSchema = z.object({
  customerName: z.string().min(3, "Name is required and min length is 3"),
  customerContact: z.string().min(10, "Contact is required"),
  customerAddress: z.string().min(3, "Address is required"),
});

export type CustomerType = z.infer<typeof customerSchema>;
