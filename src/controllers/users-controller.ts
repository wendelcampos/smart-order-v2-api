import { UsersLogic } from "@/logic/users-logic";
import { UserRole } from "@prisma/client";

import { Request, Response } from "express";
import z from "zod";

class UsersController {
  private usersLogic: UsersLogic

  constructor() {
    this.usersLogic = new UsersLogic()
  }
  
  create = async (request: Request, response: Response) => {

    const bodySchema = z.object({
      name: z.string().trim().min(2, { message: "Nome é obrigatorio"}),
      email: z.string().trim().email({ message: "Email invalido"}).toLowerCase(),
      password: z.string().min(6, { message: "A senha deve ter pelo menos 6 digitos"}),
      role: z.enum([UserRole.admin, UserRole.user]).optional().default(UserRole.user)
    })
    
    const { name, email, password, role } = bodySchema.parse(request.body)

    await this.usersLogic.create({
      name,
      email,
      password,
      role
    })

    response.status(201).json()
  }

  index = async (request: Request, response: Response) => {
    const users = await this.usersLogic.index()

    response.json(users)
  }

  remove = async (request: Request, response: Response) => {
   const id = z.string().uuid({ message: "ID fornecido é inválido"}).parse(request.params.id)

   await this.usersLogic.remove(id)

   response.json()
  }
}

export { UsersController }