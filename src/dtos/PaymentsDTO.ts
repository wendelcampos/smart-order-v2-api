import { MethodsPayments, Prisma } from "@prisma/client"

export interface PaymentsDTO {
  orderId: string
  paymentType: MethodsPayments
}

export interface UpdateTotalPayment {
  orderId: string
  total: Prisma.Decimal
}