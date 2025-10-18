import { UsersDTO } from "@/dtos/UsersDTO";
import { UsersRepository } from "@/repositories/implementations/users-repository";
import { AppError } from "@/utils/AppError";
import { User } from "@prisma/client";

import { hash } from "bcrypt";

class UsersLogic {
  private usersRepository: UsersRepository

  constructor() {
    this.usersRepository = new UsersRepository()
  }
  async create({ name, email, password, role }: UsersDTO) {

    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if(userWithSameEmail) {
      throw new AppError("Ja existe um usuario cadastrado com esse e-mail")
    }

    const hashedPassword = await hash(password, 8)

    await this.usersRepository.save({
      name,
      email,
      password: hashedPassword,
      role
    })
  }

  async index(): Promise<User[]> {
    const users = await this.usersRepository.index()

    if(!users.length) {
      throw new AppError("Nenhum usuario encontrado")
    }

    return users
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.remove(id)
  }
}

export { UsersLogic }