import { SatisfactionSurveyDTO } from "@/interfaces/SatisfactionSurveyDTO";
import { SatisfactionSurveyRepository } from "@/repositories/implementations/satisfactionSurvey-repository";

class SatisfactionSurveyLogic {
  private satisfactionSurveyRepository: SatisfactionSurveyRepository

  constructor() {
    this.satisfactionSurveyRepository = new SatisfactionSurveyRepository()
  }
  async create({ note, orderId, status }: SatisfactionSurveyDTO) {
    await this.satisfactionSurveyRepository.save({
      note,
      orderId, 
      status
    })
  }
}

export { SatisfactionSurveyLogic }