import { ProductsDTO } from "@/dtos/ProductsDTO";
import { Product } from "@prisma/client";

export interface IProductsRepository {
  save(product: Product): Promise<void>
  index(): Promise<Product[]>
  update({category, description, name, price}: ProductsDTO, id: string): Promise<void>
  remove(id: string): Promise<void>
  show(id: string): Promise<Product | null>
}