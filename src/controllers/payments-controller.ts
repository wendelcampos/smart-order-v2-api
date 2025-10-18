import { PaymentsLogic } from "@/logic/payments-logic"
import { MethodsPayments } from "@prisma/client"

import { Request, Response } from "express"
import z from "zod"

class PaymentsController {
  private paymentsLogic: PaymentsLogic

  constructor() {
    this.paymentsLogic = new PaymentsLogic()
  }

  updatePayment = async (request: Request, response: Response) => {
    const bodySchema = z.object({
      orderId: z.string().uuid(),
      paymentType: z.enum([
        MethodsPayments.cash,
        MethodsPayments.credit_card,
        MethodsPayments.debit_card,
        MethodsPayments.pix,
      ]),
    })

    console.log(request.body)

    const { orderId, paymentType } = bodySchema.parse(request.body)

    console.log(orderId, paymentType)

    await this.paymentsLogic.updatePayment({
      orderId,
      paymentType,
    })

    response.status(201).json()
  }

  index = async (request: Request, response: Response) => {
    const payments = await this.paymentsLogic.index()

    response.json(payments)
  }

  getShowPayment = async (request: Request, response: Response) => {
    const id = z
      .string()
      .uuid({ message: "ID fornecido é inválido" })
      .parse(request.params.id)

    const payment = await this.paymentsLogic.getShowPayment(id)

    response.json(payment)
  }

  remove = async (request: Request, response: Response) => {
    const id = z
      .string()
      .uuid({ message: "ID fornecido é inválido" })
      .parse(request.params.id)

    await this.paymentsLogic.remove(id)

    response.json()
  }
}

export { PaymentsController }