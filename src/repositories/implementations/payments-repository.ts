import { Payment, SatisfactionSurvey } from "@prisma/client";
import { IPaymentsRepository } from "../IPaymentsRepository";
import { prisma } from "@/database/prisma";
import { PaymentsDTO } from "@/interfaces/PaymentsDTO";

class PaymentsRepository implements IPaymentsRepository {
  async save({ total, orderId, paymentType }: PaymentsDTO): Promise<void> {
    await prisma.payment.create({
      data: {
        total,
        orderId,
        paymentType,
        paymentDate: new Date()
      }
    })
  }
  
  async getByPaymentId(id: string): Promise<Payment | null> {
    const payment = await prisma.payment.findFirst({
      where: {
        id
      },
      include: {
        order: true
      }
    })
    
    return payment
  }
  
  async findSatisfactionSurvey(orderId: string): Promise<SatisfactionSurvey | null> {
    const satisfactionSurvey = prisma.satisfactionSurvey.findFirst({
      where: {
        orderId
      }
    })

    return satisfactionSurvey
  }
}

export { PaymentsRepository }