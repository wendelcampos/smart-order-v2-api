import { SatisfactionSurveyLogic } from "@/logic/satisfactionSurvey-logic"
import { StatusSatisfactionSurvey } from "@prisma/client"

import { Request, Response } from "express"
import z from "zod"

class SatisfactionSurveyController {
  private satisfactionSurveyLogic: SatisfactionSurveyLogic

  constructor() {
    this.satisfactionSurveyLogic = new SatisfactionSurveyLogic()
  }

  create = async(request: Request, response: Response) => {
    const bodySchema = z.object({
      orderId: z.string().uuid(),
      note: z.number(),
      status: z.enum([StatusSatisfactionSurvey.bom, StatusSatisfactionSurvey.otimo, StatusSatisfactionSurvey.pessimo, StatusSatisfactionSurvey.regular, StatusSatisfactionSurvey.ruim])
    })

    const { note, orderId, status } = bodySchema.parse(request.body)

    await this.satisfactionSurveyLogic.create({
      note,
      orderId,
      status
    })

    response.status(201).json()
  }
}

export { SatisfactionSurveyController }