import { OrdersItensDTO } from "@/interfaces/OrdersItensDTO";
import { OrderItems } from "@prisma/client";
import { IOrdersItensRepository } from "../IOrdersItensRepository";
import { prisma } from "@/database/prisma";

class OrdersItensRepository implements IOrdersItensRepository {
  async save({ orderId, productId, quantity }: OrdersItensDTO): Promise<void> {
    await prisma.orderItems.create({
      data: {
        orderId,
        productId,
        quantity
      }
    })
  }
  async index(): Promise<OrderItems[]> {
    const ordersItens = await prisma.orderItems.findMany({
      include: {
        product: true
      }
    })

    return ordersItens
  }
  async show(id: string): Promise<OrderItems | null> {
    const orderItem = await prisma.orderItems.findFirst({
      where: {
        id
      }
    })

    return orderItem
  }
 async remove(id: string): Promise<void> {
    await prisma.orderItems.delete({
      where: {
        id
      }
    })
  }

}

export { OrdersItensRepository }