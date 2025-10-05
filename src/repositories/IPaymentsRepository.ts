import { PaymentsDTO } from "@/interfaces/PaymentsDTO";
import { Payment, SatisfactionSurvey } from "@prisma/client";

export interface IPaymentsRepository {
  save({ orderId, paymentType }: PaymentsDTO): Promise<void>
  getByPaymentId(id: string ): Promise<Payment | null>
  findSatisfactionSurvey(orderId: string): Promise<SatisfactionSurvey | null>
}