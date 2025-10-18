import { OrdersDTO } from "@/dtos/OrdersDTO";
import { Customer, Order, Table, Waiter } from "@prisma/client";

export interface IOrdersRepository {
  findByTable(tableNumber: string): Promise<Table | null>
  findByCustomer(cpf: string): Promise<Customer | null>
  findByWaiter(waiterName: string): Promise<Waiter | null>
  save({ customerId, tableId, waiterId }: OrdersDTO): Promise<void>
  index(): Promise<Order[]>
  show(id: string): Promise<Order | null>
  remove(id: string): Promise<void>
  updateStatusOrder(id: string, status: 'open' | 'closed'): Promise<void>
}