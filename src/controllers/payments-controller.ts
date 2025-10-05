import { PaymentsLogic } from "@/logic/payments-logic"
import { MethodsPayments } from "@prisma/client"

import { Request, Response } from "express"
import z from "zod"

class PaymentsController {
  private paymentsLogic: PaymentsLogic

  constructor() {
    this.paymentsLogic = new PaymentsLogic()
  }
  
  create = async (request: Request, response: Response) => {
    const bodySchema = z.object({
      orderId: z.string().uuid(),
      total: z.number(),
      paymentType: z.enum([MethodsPayments.cash, MethodsPayments.credit_card, MethodsPayments.debit_card, MethodsPayments.pix])
    })

    const { orderId, paymentType, total } = bodySchema.parse(request.body)

    await this.paymentsLogic.create({
      orderId,
      paymentType,
      total
    })

    response.status(201).json()
  }


  getShowPayment = async (request: Request, response: Response) => {
    const id = z.string().uuid({ message: "ID fornecido é inválido"}).parse(request.params.id)

    const payment = await this.paymentsLogic.getShowPayment(id)

    response.json(payment)
  }
}

export { PaymentsController }