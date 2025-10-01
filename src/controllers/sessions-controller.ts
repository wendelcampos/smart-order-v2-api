import { SessionsLogic } from "@/logic/sessions-logic"

import { Request, Response } from "express"
import z from "zod"

class SessionsController {
  private sessionsLogic: SessionsLogic

  constructor() {
    this.sessionsLogic = new SessionsLogic()
  }

  create = async (request: Request, response: Response) => {
    const bodySchema = z.object({
      email: z.string().email({ message: "E-mail invalido"}).toLowerCase(),
      password: z.string().min(6)
    })

    const { email, password } = bodySchema.parse(request.body)

    const token = await this.sessionsLogic.create({ email, password })

    response.json(token)
  }
}

export { SessionsController }