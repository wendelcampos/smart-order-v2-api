import { OrdersItensDTO } from "@/interfaces/OrdersItensDTO"
import { OrdersItensRepository } from "@/repositories/implementations/ordersItens-repository"
import { AppError } from "@/utils/AppError"

class OrdersItensLogic {
  private ordersItensRepository: OrdersItensRepository

  constructor() {
    this.ordersItensRepository = new OrdersItensRepository()
  }

  async create({ orderId, productId, quantity }: OrdersItensDTO) {
    await this.ordersItensRepository.save({
      orderId,
      productId,
      quantity
    })
  }

  async index() {
    const ordersItens = await this.ordersItensRepository.index()

    if(!ordersItens.length) {
      throw new AppError("Nenhum item encontrado")
    }
    
    return ordersItens
  }

  async show(id: string) {
    const orderItem = await this.ordersItensRepository.show(id)

    if(!orderItem) {
      throw new AppError("Nenhum item encontrado")
    }

    return orderItem
  }

  async remove(id: string) {
    await this.ordersItensRepository.remove(id)
  }

  async findProductsByOrderId(orderId: string) {
    const orderItems = await this.ordersItensRepository.findByOrderId(orderId)

    if(!orderItems.length) {
      throw new AppError("Nenhum produto encontrado para este pedido")
    }
    
    return orderItems
  }
}

export { OrdersItensLogic }