import { Table, Customer, Waiter, Order } from "@prisma/client";
import { IOrdersRepository } from "../IOrdersRepository";
import { prisma } from "@/database/prisma";
import { OrdersDTO } from "@/interfaces/OrdersDTO";

class OrdersRepository implements IOrdersRepository {
  async save({ customerID, tableID, waiterID }: OrdersDTO): Promise<void> {
    await prisma.order.create({
      data: {
        tableId: tableID,
        waiterId: waiterID,
        customerId: customerID
      }
    })
  }

  index(): Promise<Order[]> {
    const orders = prisma.order.findMany()

    return orders
  }

  async show(id: string): Promise<Order | null> {
    const order = await prisma.order.findFirst({
      where: {
        id
      }
    })

    return order
  }
  async remove(id: string): Promise<void> {
    await prisma.order.delete({
      where: {
        id
      }
    })
  }

  async findByTable(tableNumber: string): Promise<Table | null> {
    const table = await prisma.table.findFirst({
      where: {
        tableNumber
      }
    })
    
    return table
  }
  async findByCustomer(cpf: string): Promise<Customer | null> {
    const customer = await prisma.customer.findFirst({
      where: {
        cpf
      }
    })

    return customer
  }
  async findByWaiter(waiterName: string): Promise<Waiter | null> {
    const waiter = await prisma.waiter.findFirst({
      where: {
        name: waiterName
      }
    })

    return waiter
  }
}

export { OrdersRepository }