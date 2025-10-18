import { PaymentsDTO, UpdateTotalPayment } from "@/dtos/PaymentsDTO";
import { Payment, SatisfactionSurvey } from "@prisma/client";

export interface IPaymentsRepository {
  updatePayment({ orderId, paymentType }: PaymentsDTO): Promise<void>
  index(): Promise<Payment[]>
  getByPaymentId(id: string): Promise<Payment | null>
  createPaymentOrder(orderId: string): Promise<void>
  findSatisfactionSurvey(orderId: string): Promise<SatisfactionSurvey | null>
  updateTotalPayment({ orderId, total }: UpdateTotalPayment): Promise<void>
  remove(id: string): Promise<void>
}