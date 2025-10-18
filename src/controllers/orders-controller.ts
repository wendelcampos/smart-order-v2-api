import { OrdersLogic } from "@/logic/orders-logic"
import { Request, Response } from "express"
import z from "zod"

class OrdersController {
  private ordersLogic: OrdersLogic

  constructor() {
    this.ordersLogic = new OrdersLogic()
  }
  create = async (request: Request, response: Response) => {
    const bodySchema = z.object({
      tableNumber: z.string(),
      cpf: z
      .string()
      .transform((val) => val.replace(/\D/g, ""))
      .refine((val) => /^\d{11}$/.test(val), { message: "CPF inválido: deve conter 11 números" }),
      waiterName: z.string().min(6)
    })

    const { tableNumber, cpf, waiterName } = bodySchema.parse(request.body)

    await this.ordersLogic.create({
      tableNumber,
      cpf,
      waiterName
    })

    response.status(201).json()
  }

  index = async (request: Request, response: Response) => {
    const orders = await this.ordersLogic.index()

    response.json(orders)
  }

  show = async (request: Request, response: Response) => {
    const id = z.string().uuid({ message: "ID fornecido é inválido"}).parse(request.params.id)

    const order = await this.ordersLogic.show(id)

    response.json(order)
  }

  remove = async (request: Request, response: Response) => {
    const id = z.string().uuid({ message: "ID fornecido é inválido"}).parse(request.params.id)

    await this.ordersLogic.remove(id)

    response.json()
  }
}

export { OrdersController }