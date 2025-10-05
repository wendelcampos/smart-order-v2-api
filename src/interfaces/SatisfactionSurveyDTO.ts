import { StatusSatisfactionSurvey } from "@prisma/client"

export interface SatisfactionSurveyDTO {
  note: number
  status: StatusSatisfactionSurvey
  orderId: string
}