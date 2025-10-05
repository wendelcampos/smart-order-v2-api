import { SatisfactionSurveyDTO } from "@/interfaces/SatisfactionSurveyDTO";

export interface ISatisfactionSurveyRepository {
  save({ note, orderId, status }: SatisfactionSurveyDTO): Promise<void>
}