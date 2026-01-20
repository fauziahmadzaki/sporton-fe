import { fetcher } from "@/lib/api";
import { Product } from "@/types";

export async function getAllProducts(): Promise<Product[]> {
  return await fetcher<Product[]>("/products");
}

export async function getProductById(id: string): Promise<Product> {
  return await fetcher<Product>(`/products/${id}`);
}
