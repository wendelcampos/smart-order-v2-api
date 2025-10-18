import { User } from "@prisma/client";
import { IUsersRepository } from "../IUsersRespository";
import { prisma } from "@/database/prisma";
import { UsersDTO } from "@/dtos/UsersDTO";

class UsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({ where: { email } });
    
    return user;
  }
  async save({ name, email, password, role }: UsersDTO): Promise<void> {
    await prisma.user.create({
      data: {
        name,
        email,
        password,
        role
      }
    })
  }
  async index(): Promise<User[]> {
    const users = await prisma.user.findMany()
    
    return users
  }
  async remove(id: string): Promise<void> {
    await prisma.user.delete({
      where: { id }
    })
  }
}

export { UsersRepository }