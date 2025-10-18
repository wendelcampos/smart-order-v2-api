import { OrdersItensDTO } from "@/dtos/OrdersItensDTO";
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

  async findByOrderId(orderId: string): Promise<OrderItems[]> {
    const orderItems = await prisma.orderItems.findMany({
      where: {
        orderId
      },
      include: {
        product: true
      }
    })

    return orderItems
  }

  async findOrderById(orderId: string): Promise<any> {
    const order = await prisma.order.findFirst({
      where: {
        id: orderId
      }
    })

    return order
  }

  async findProductById(productId: string): Promise<any> {
    const product = await prisma.product.findFirst({
      where: {
        id: productId
      }
    })

    return product
  }

}

export { OrdersItensRepository }