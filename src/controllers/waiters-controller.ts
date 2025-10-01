import { WaitersLogic } from "@/logic/waiters-logic"

import { Request, Response } from "express"
import z from "zod"

class WaitersController {
  private waitersLogic: WaitersLogic

  constructor() {
    this.waitersLogic = new WaitersLogic()
  }

  create = async (request: Request, response: Response) => {
    const bodySchema = z.object({
      name: z.string().min(3),
      telephone: z
        .string()
        .transform((val) => val.replace(/\D/g, ""))
        .refine((val) => /^\d{11}$/.test(val), { message: "Telefone inválido: deve conter 11 números" }),
    })

    const { name, telephone } = bodySchema.parse(request.body)

    await this.waitersLogic.create({
      name,
      telephone
    })

    response.status(201).json()
  }

  update = async (request: Request, response: Response) => {
    const id = z.string().uuid({ message: "ID fornecido é inválido"}).parse(request.params.id)

    const bodySchema = z.object({
      name: z.string().min(3),
      telephone: z
        .string()
        .transform((val) => val.replace(/\D/g, ""))
        .refine((val) => /^\d{11}$/.test(val), { message: "Telefone inválido: deve conter 11 números" }),
    })

    const { name, telephone } = bodySchema.parse(request.body)

    await this.waitersLogic.update({
      name,
      telephone
    }, id)

    response.json()
  }

  index = async (request: Request, response: Response) => {
    const waiters = await this.waitersLogic.index()

    response.json(waiters)
  }

  remove = async (request: Request, response: Response) => {
    const id = z.string().uuid({ message: "ID fornecido é inválido"}).parse(request.params.id)

    await this.waitersLogic.remove(id)

    response.json()
  }
}

export { WaitersController }