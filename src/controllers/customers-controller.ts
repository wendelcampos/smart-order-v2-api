import { CustomersLogic } from "@/logic/customers-logic"

import { Request, Response } from "express"
import z from "zod"

class CustomersController {

  private customersLogic: CustomersLogic

  constructor() {
    this.customersLogic = new CustomersLogic()
  }

  create = async (request: Request, response: Response) => {
    const bodySchema = z.object({
      name: z.string().min(3),
      cpf: z
        .string()
        .transform((val) => val.replace(/\D/g, ""))
        .refine((val) => /^\d{11}$/.test(val), { message: "CPF inválido: deve conter 11 números" }),
      telephone: z
        .string()
        .transform((val) => val.replace(/\D/g, ""))
        .refine((val) => /^\d{11}$/.test(val), { message: "Telefone inválido: deve conter 11 números" }),
      email: z.string().email({ message: "E-mail invalido"}).trim().toLowerCase()
    })

    const { name, cpf, telephone, email } = bodySchema.parse(request.body)

    await this.customersLogic.create({
      name, 
      cpf,
      telephone,
      email
    })

    response.status(201).json()
  }

  index = async (request: Request, response: Response) => {
    const customers = await this.customersLogic.index()

    response.json(customers)
  }

  remove = async (request: Request, response: Response) => {
    const id = z.string().uuid({ message: "ID fornecido é inválido"}).parse(request.params.id)

    await this.customersLogic.remove(id)

    response.json()
  }

  update = async (request: Request, response: Response) => {
    const id = z.string().uuid({ message: "ID fornecido é inválido"}).parse(request.params.id)

    const bodySchema = z.object({
      name: z.string().min(3),
      cpf: z
        .string()
        .transform((val) => val.replace(/\D/g, ""))
        .refine((val) => /^\d{11}$/.test(val), { message: "CPF inválido: deve conter 11 números" }),
      telephone: z
        .string()
        .transform((val) => val.replace(/\D/g, ""))
        .refine((val) => /^\d{11}$/.test(val), { message: "Telefone inválido: deve conter 11 números" }),
      email: z.string().email({ message: "E-mail invalido"}).trim().toLowerCase()
    })

    const { name, cpf, telephone, email} = bodySchema.parse(request.body)

    await this.customersLogic.update({
      name, 
      cpf,
      telephone,
      email
    }, id)

    response.json()
  }

  show = async (request: Request, response: Response) => {
    const id = z.string().uuid({ message: "ID fornecido é inválido"}).parse(request.params.id)

    const customer = await this.customersLogic.show(id)

    response.json(customer)
  }
}

export { CustomersController }