import { TablesLogic } from "@/logic/tables-logic"

import { Request, Response } from "express"
import z from "zod"

class TablesController {
  private tablesLogic: TablesLogic

  constructor() {
    this.tablesLogic = new TablesLogic()
  }
  create = async (request: Request, response: Response) => {
    const bodySchema = z.object({
      tableNumber: z.string()
    })

    const { tableNumber } = bodySchema.parse(request.body)

    await this.tablesLogic.create({
      tableNumber
    })

    response.status(201).json()
  }

  update = async (request: Request, response: Response) => {
    const id = z.string().uuid({ message: "ID fornecido é inválido"}).parse(request.params.id)

    const bodySchema = z.object({
      tableNumber: z.string()
    })

    const { tableNumber } = bodySchema.parse(request.body)

    await this.tablesLogic.update({
      tableNumber
    }, id)

    response.json()
  }

  index = async (request: Request, response: Response) => {
    const tables = await this.tablesLogic.index()

    response.json(tables)
  }

  remove = async (request: Request, response: Response) => {
    const id = z.string().uuid({ message: "ID fornecido é inválido"}).parse(request.params.id)

    await this.tablesLogic.remove(id)
  }
}

export { TablesController }