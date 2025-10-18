import { Table, Customer, Waiter, Order } from "@prisma/client";
import { IOrdersRepository } from "../IOrdersRepository";
import { prisma } from "@/database/prisma";
import { OrdersDTO } from "@/dtos/OrdersDTO";

class OrdersRepository implements IOrdersRepository {
  async save({ customerId, tableId, waiterId }: OrdersDTO): Promise<void> {
    await prisma.order.create({
      data: {
        tableId,
        customerId,
        waiterId
      }
    })
  }

  async index(): Promise<Order[]> {
    const orders = await prisma.order.findMany({
      include: {
        table: true,
        customer: true,
        waiter: true,
      }
    })

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

  async findByOrderId(customerId: string): Promise<Order | null> {
    const order = await prisma.order.findFirst({
      where: {
        customerId
      }
    })

    return order
  }

  async updateStatusOrder(id: string, status: 'open' | 'closed'): Promise<void> {
    await prisma.order.update({
      where: {
        id
      },
      data: {
        status
      }
    })
  }
}

export { OrdersRepository }