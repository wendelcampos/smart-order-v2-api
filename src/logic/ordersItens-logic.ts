import { OrdersItensDTO } from "@/dtos/OrdersItensDTO"
import { OrdersItensRepository } from "@/repositories/implementations/ordersItens-repository"
import { PaymentsRepository } from "@/repositories/implementations/payments-repository"
import { AppError } from "@/utils/AppError"
import { OrderItems, Product } from "@prisma/client"
import { Decimal } from "@prisma/client/runtime/library"

type OrderItemsWithProduct = OrderItems & {
  product: Product
}

class OrdersItensLogic {
  private ordersItensRepository: OrdersItensRepository
  private paymentsRepository: PaymentsRepository

  constructor() {
    this.ordersItensRepository = new OrdersItensRepository()
    this.paymentsRepository = new PaymentsRepository()
  }

  async create({ orderId, productId, quantity }: OrdersItensDTO) {
    const orderExists = await this.ordersItensRepository.findOrderById(orderId)

    if (!orderExists) {
      throw new AppError("Pedido não encontrado")
    }

    const productExists = await this.ordersItensRepository.findProductById(productId)
    if (!productExists) {
      throw new AppError("Produto não encontrado")
    }

    await this.ordersItensRepository.save({
      orderId,
      productId,
      quantity
    })

    const itens = (await this.ordersItensRepository.findByOrderId(
      orderId
    )) as OrderItemsWithProduct[]

   if (!itens.length) {
     throw new AppError("Nenhum item encontrado!")
   }

   let total = 0

   itens.forEach((item) => {
     const sumOrder = Number(item.product.price) * Number(item.quantity)

     total += sumOrder
   })

   const totalFormatted = Number(total.toFixed(2))

    await this.paymentsRepository.updateTotalPayment({
      orderId,
      total: new Decimal(totalFormatted),
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