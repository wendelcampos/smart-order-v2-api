import { PaymentsDTO } from "@/interfaces/PaymentsDTO"
import { OrdersItensRepository } from "@/repositories/implementations/ordersItens-repository"
import { PaymentsRepository } from "@/repositories/implementations/payments-repository"
import { OrdersRepository } from "@/repositories/implementations/orders-repository"
import { TablesRepository } from "@/repositories/implementations/tables-repository"
import { AppError } from "@/utils/AppError"
import { OrderItems, Product } from "@prisma/client"

type OrderItemsWithProduct = OrderItems & {
  product: Product
}

class PaymentsLogic {
  private ordersItensRepository: OrdersItensRepository
  private paymentsRepository: PaymentsRepository
  private ordersRepository: OrdersRepository
  private tablesRepository: TablesRepository

  constructor() {
    this.ordersItensRepository = new OrdersItensRepository()
    this.paymentsRepository = new PaymentsRepository()
    this.ordersRepository = new OrdersRepository()
    this.tablesRepository = new TablesRepository()
  }

  async create({ orderId, paymentType, total }: PaymentsDTO) {
    const satisfactionSurvey = await this.paymentsRepository.findSatisfactionSurvey(orderId)

    if(!satisfactionSurvey) {
      throw new AppError("Necessário preencher pesquisa de satisfação para concluir o pagamento")
    }

    // Buscar o pedido para obter o tableId
    const order = await this.ordersRepository.show(orderId)
    
    if(!order) {
      throw new AppError("Pedido não encontrado")
    }

    // Salvar o pagamento
    await this.paymentsRepository.save({
      orderId,
      paymentType,
      total
    })

    await this.ordersRepository.updateStatusOrder(orderId, 'closed')

    await this.tablesRepository.updateStatusTable(order.tableId, 'open')
  }
  async getShowPayment(id: string) {
    const itens = await this.ordersItensRepository.findByOrderId(id) as OrderItemsWithProduct[]

    if(!itens.length) {
      throw new AppError("Nenhum item encontrado!")
    }

    let total = 0    
    
    itens.forEach(item => {
      const sumOrder = Number(item.product.price) * Number(item.quantity)

      total += sumOrder
    });

    const totalFormatted = Number(total.toFixed(2))
    
    return {
      orderId: id,
      total: totalFormatted,
      items: itens.map(item => ({
        productId: item.productId,
        productName: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        subtotal: Number((Number(item.product.price) * item.quantity).toFixed(2))
      })),
      totalItems: itens.reduce((acc, item) => acc + item.quantity, 0),
      createdAt: itens[0]?.createdAt
    }
  }
}

export { PaymentsLogic }