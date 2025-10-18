import { Category, Prisma } from "@prisma/client"

export interface ProductsDTO {
  name: string
  description: string
  price: Prisma.Decimal
  category: Category
}