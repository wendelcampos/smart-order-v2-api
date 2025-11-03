import { authConfig } from "@/configs/auth";
import { SessionsDTO } from "@/dtos/SessionsDTO";
import { UsersRepository } from "@/repositories/implementations/users-repository";
import { AppError } from "@/utils/AppError";

import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export type SessionsResponse = {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}

class SessionsLogic {
  private usersRepository: UsersRepository

  constructor() {
    this.usersRepository = new UsersRepository()
  }

  async create({ email, password }: SessionsDTO): Promise<SessionsResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if(!user) {
      throw new AppError("E-mail ou senha invalidos", 401)
    }

    const passwordMatched = await compare(password, user.password) 

    if(!passwordMatched) {
      throw new AppError("E-mail ou senha invalidos", 401)
    }

    const { expiresIn, secret } = authConfig.jwt

    const token = sign({ role: user.role }, secret, {
      subject: user.id,
      expiresIn
    })

    return { 
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    }
  }
}

export { SessionsLogic }