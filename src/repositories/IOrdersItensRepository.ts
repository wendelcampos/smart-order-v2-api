import { OrdersItensDTO } from "@/dtos/OrdersItensDTO";
import { OrderItems } from "@prisma/client";

export interface IOrdersItensRepository {
  save({ orderId, productId, quantity }: OrdersItensDTO): Promise<void>
  index(): Promise<OrderItems[]>
  show(id: string): Promise<OrderItems | null>
  remove(id: string): Promise<void>
  findByOrderId(orderId: string): Promise<OrderItems[]>
  findOrderById(orderId: string): Promise<any>
  findProductById(productId: string): Promise<any>
}