import { OrdersRequestDTO } from "@/dtos/OrdersDTO";
import { CustomersRepository } from "@/repositories/implementations/customers-repository";
import { OrdersRepository } from "@/repositories/implementations/orders-repository";
import { PaymentsRepository } from "@/repositories/implementations/payments-repository";
import { TablesRepository } from "@/repositories/implementations/tables-repository";
import { AppError } from "@/utils/AppError";

class OrdersLogic {
  private ordersRepository: OrdersRepository
  private paymentsRepository: PaymentsRepository
  private tablesRepository: TablesRepository

  constructor() {
    this.ordersRepository = new OrdersRepository()
    this.paymentsRepository = new PaymentsRepository()
    this.tablesRepository = new TablesRepository()
  }
  async create({ tableNumber, cpf, waiterName }: OrdersRequestDTO) {
    const table = await this.ordersRepository.findByTable(tableNumber)

    if(!table) {
      throw new AppError("Nenhuma mesa encontrada!")
    }

    const customer = await this.ordersRepository.findByCustomer(cpf)

    if(!customer) {
      throw new AppError("Nenhum cliente encontrado!")
    }

    const waiter = await this.ordersRepository.findByWaiter(waiterName)

    if(!waiter) {
      throw new AppError("Nenhum garçon encontrado!")
    }

    await this.ordersRepository.save({
      customerId: customer?.id,
      tableId: table.id,
      waiterId: waiter.id
    })

    const order = await this.ordersRepository.findByOrderId(customer.id)

    if (!order) {
      throw new AppError("Nenhum pedido encontrado!")
    }

    await this.paymentsRepository.createPaymentOrder(order.id)

    await this.tablesRepository.updateStatusTable(order.tableId, "closed")
  }

  async index() {
    const orders = await this.ordersRepository.index()

    if(!orders.length) {
      throw new AppError("Nenhum pedido encontrado!")
    }

    return orders
  }

  async show(id: string) {
    const order = await this.ordersRepository.show(id)

    if(!order) {
      throw new AppError("Nenhum pedido encontrado!")
    }

    return order
  }

  async remove(id: string) {
    
    const order = await this.ordersRepository.show(id)
    
    if (!order) {
      throw new AppError("Nenhum pedido encontrado!")
    }

    await this.tablesRepository.updateStatusTable(order.tableId, "open")

    await this.ordersRepository.remove(id) 
  }
}

export { OrdersLogic }