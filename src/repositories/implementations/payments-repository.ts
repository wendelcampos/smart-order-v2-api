import { Payment, SatisfactionSurvey } from "@prisma/client";
import { IPaymentsRepository } from "../IPaymentsRepository";
import { prisma } from "@/database/prisma";
import { PaymentsDTO, UpdateTotalPayment } from "@/dtos/PaymentsDTO";

class PaymentsRepository implements IPaymentsRepository {
  async updatePayment({ orderId, paymentType }: PaymentsDTO): Promise<void> {
    await prisma.payment.update({
      where: {
        orderId,
      },
      data: {
        paymentType,
        status: "paid",
        paymentDate: new Date(),
      }
    })
  }

  async index(): Promise<Payment[]> {
    const payments = await prisma.payment.findMany()

    return payments
  }

  async getByPaymentId(id: string): Promise<Payment | null> {
    const payment = await prisma.payment.findFirst({
      where: {
        id,
      },
      include: {
        order: true,
      },
    })

    return payment
  }

  async updateTotalPayment({ orderId, total }: UpdateTotalPayment): Promise<void> {
    await prisma.payment.updateMany({
      where: {
        orderId,
      },
      data: {
        total,
      },
    })
  }

  async createPaymentOrder(orderId: string): Promise<void> {
    await prisma.payment.create({
      data: {
        orderId,
        status: "open",
      },
    })
  }

  async findSatisfactionSurvey(
    orderId: string
  ): Promise<SatisfactionSurvey | null> {
    const satisfactionSurvey = prisma.satisfactionSurvey.findFirst({
      where: {
        orderId,
      },
    })

    return satisfactionSurvey
  }

  async remove(id: string): Promise<void> {
    await prisma.payment.delete({
      where: {
        id,
      },
    })
  }
}

export { PaymentsRepository }