import { Request, Response } from "express";
import { OrdersItensLogic } from "@/logic/ordersItens-logic";
import z from "zod";

class OrdersItensController {
  private ordersItensLogic: OrdersItensLogic

  constructor() {
    this.ordersItensLogic = new OrdersItensLogic()
  }

  create = async(request: Request, response: Response) => {
    const bodySchema = z.object({
      orderId: z.string(),
      productId: z.string(),
      quantity: z.number(), 
    })

    const { orderId, productId, quantity } = bodySchema.parse(request.body)

    await this.ordersItensLogic.create({
      orderId,
      productId,
      quantity
    })

    response.status(201).json()
  }
  
  index = async (request: Request, response: Response) => {
    const ordersItens = await this.ordersItensLogic.index()

    response.json(ordersItens)
  }

  show = async (request: Request, response: Response) => {
    const id = z.string().uuid({ message: "ID fornecido é inválido"}).parse(request.params.id)

    const orderItem = await this.ordersItensLogic.show(id)

    response.json(orderItem)
  }

  remove = async (request: Request, response: Response) => {
    const id = z.string().uuid({ message: "ID fornecido é inválido"}).parse(request.params.id)
    
    await this.ordersItensLogic.remove(id)

    response.json()
  }

  getProductsByOrderId = async (request: Request, response: Response) => {
    const orderId = z.string().uuid({ message: "Order ID fornecido é inválido"}).parse(request.params.orderId)

    const orderItems = await this.ordersItensLogic.findProductsByOrderId(orderId)

    response.json(orderItems)
  }
}

export { OrdersItensController }