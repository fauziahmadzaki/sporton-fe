import { fetcher } from "@/lib/api";
import { Category } from "@/types";

export async function getAllCategories(): Promise<Category[]> {
  return await fetcher<Category[]>("/categories");
}
