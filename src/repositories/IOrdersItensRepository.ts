import { OrdersItensDTO } from "@/interfaces/OrdersItensDTO";
import { OrderItems } from "@prisma/client";

export interface IOrdersItensRepository {
  save({ orderId, productId, quantity }: OrdersItensDTO): Promise<void>
  index(): Promise<OrderItems[]>
  show(id: string): Promise<OrderItems | null>
  remove(id: string): Promise<void>
}