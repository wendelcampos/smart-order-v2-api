import { SatisfactionSurveyDTO } from "@/interfaces/SatisfactionSurvey";
import { ISatisfactionSurveyRepository } from "../ISatisfactionSurveyRepository";
import { prisma } from "@/database/prisma";

class SatisfactionSurveyRepository implements ISatisfactionSurveyRepository {
  async save({ note, orderId, status }: SatisfactionSurveyDTO): Promise<void> {
    await prisma.satisfactionSurvey.create({
      data: {
        note,
        status,
        orderId
      }
    })
  }
}

export { SatisfactionSurveyRepository }