import { SatisfactionSurveyDTO } from "@/dtos/SatisfactionSurveyDTO";

export interface ISatisfactionSurveyRepository {
  save({ note, orderId, status }: SatisfactionSurveyDTO): Promise<void>
}