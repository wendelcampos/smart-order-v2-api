import { ProductsDTO } from "@/interfaces/ProductsDTO";
import { Product } from "@prisma/client";
import { IProductsRepository } from "../IProductsRepository";
import { prisma } from "@/database/prisma";

class ProductsRepository implements IProductsRepository {
  async save({ name, description, price, category }: ProductsDTO): Promise<void> {
    await prisma.product.create({
      data: {
        name,
        description,
        price,
        category
      }
    })
  }
  async index(): Promise<Product[]> {
    const products = await prisma.product.findMany()

    return products
  }
  async update({ category, description, name, price }: ProductsDTO, id: string): Promise<void> {
    await prisma.product.update({
      data: {
        name,
        price,
        description,
        category
      },
      where: {
        id
      }
    })
  }
  async remove(id: string): Promise<void> {
    await prisma.product.delete({
      where: { id }
    })
  }
  async show(id: string): Promise<Product | null > {
    const product = await prisma.product.findFirst({
      where: { id }
    })

    return product 
  }
}

export { ProductsRepository }