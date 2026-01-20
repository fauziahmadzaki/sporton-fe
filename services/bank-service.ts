import { fetcher } from "@/lib/api";
import { Bank } from "@/types";

export const getAllBanks = async (): Promise<Bank[]> => {
  return await fetcher<Bank[]>("/banks");
};
