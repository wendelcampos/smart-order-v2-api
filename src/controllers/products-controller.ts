import { ProductsLogic } from "@/logic/products-logic"
import { Category, Prisma } from "@prisma/client"

import { Response, Request } from "express"
import z from "zod"

class ProductsController {
  private productsLogic: ProductsLogic

  constructor() {
    this.productsLogic = new ProductsLogic()
  }

  create = async (request: Request, response: Response) => {
    const bodySchema = z.object({
      name: z.string().min(6),
      description: z.string(),
      price: z.number(),
      category: z.enum([Category.bebidas, Category.pratos, Category.pratos_do_dia])
    })

    const { name, description, price, category } = bodySchema.parse(request.body)

    await this.productsLogic.create({
      name,
      description,
      price: new Prisma.Decimal(price),
      category
    })

    response.status(201).json()
  }

  index = async (request: Request, response: Response) => {
    const products = await this.productsLogic.index()

    response.json(products)
  }

  remove = async (request: Request, response: Response) => {
    const id = z.string().uuid({ message: "ID fornecido é inválido"}).parse(request.params.id)

    await this.productsLogic.remove(id)

    response.json()
  }

  show = async (request: Request, response: Response) => {
    const id = z.string().uuid({ message: "ID fornecido é inválido"}).parse(request.params.id)

    const product = await this.productsLogic.show(id)

    response.json(product)
  }

  update = async (request: Request, response: Response) => {
    const id = z.string().uuid({ message: "ID fornecido é inválido"}).parse(request.params.id)

    const bodySchema = z.object({
      name: z.string().min(6),
      description: z.string(),
      price: z.number(),
      category: z.enum([Category.bebidas, Category.pratos, Category.pratos_do_dia])
    })

    const { name, description, price, category } = bodySchema.parse(request.body)

    await this.productsLogic.update({
      name, 
      description,
      price: new Prisma.Decimal(price),
      category
    }, id)

    response.json()
  }
}

export { ProductsController }