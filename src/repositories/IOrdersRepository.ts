import { OrdersDTO } from "@/interfaces/OrdersDTO";
import { Customer, Order, Table, Waiter } from "@prisma/client";

export interface IOrdersRepository {
  findByTable(tableNumber: string): Promise<Table | null>
  findByCustomer(cpf: string): Promise<Customer | null>
  findByWaiter(waiterName: string): Promise<Waiter | null>
  save({ customerID, tableID, waiterID }: OrdersDTO): Promise<void>
  index(): Promise<Order[]>
  show(id: string): Promise<Order | null>
  remove(id: string): Promise<void>
}