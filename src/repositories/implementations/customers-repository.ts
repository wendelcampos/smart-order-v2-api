import { CustomersDTO } from "@/interfaces/CustomersDTO";
import { Customer } from "@prisma/client";
import { ICustomerRepository } from "../ICustomerRepository";
import { prisma } from "@/database/prisma";

class CustomersRepository implements ICustomerRepository {
  async create({ name, cpf, email, telephone }: CustomersDTO): Promise<void> {
    await prisma.customer.create({
      data: {
        name,
        cpf,
        email,
        telephone
      }
    })
  }
  async index(): Promise<Customer[]> {
    const customer = await prisma.customer.findMany()

    return customer
  }
  async remove(id: string): Promise<void> {
    await prisma.customer.delete({ 
      where: { 
        id
      }
    })
  }
  async update({ name, cpf, email, telephone }: CustomersDTO, id: string): Promise<void> {
    await prisma.customer.update({
      data: {
        name,
        cpf,
        email,
        telephone
      },
      where: {
        id
      }
    })
  }
  async show(id: string): Promise<Customer | null > {
    const customer = await prisma.customer.findFirst({
      where: {
        id
      }
    })

    return customer
  }
}

export { CustomersRepository }