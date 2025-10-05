import { SatisfactionSurveyDTO } from "@/interfaces/SatisfactionSurvey";

export interface ISatisfactionSurveyRepository {
  save({ note, orderId, status }: SatisfactionSurveyDTO): Promise<void>
}