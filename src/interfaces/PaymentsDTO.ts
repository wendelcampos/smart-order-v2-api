import { MethodsPayments } from "@prisma/client"

export interface PaymentsDTO {
  total: number
  orderId: string
  paymentType: MethodsPayments
}