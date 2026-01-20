import { fetcher } from "@/lib/api";
import { Transaction } from "@/types";

export const confirmPayment = async (
  payload: FormData,
): Promise<Transaction> => {
  return await fetcher<Transaction>("/transactions/checkout", {
    method: "POST",

    body: payload,
  });
};

export const getTransactionById = async (id: string): Promise<Transaction> => {
  return await fetcher<Transaction>(`/transactions/${id}`);
};
