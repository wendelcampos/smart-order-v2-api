import { CustomersDTO } from "@/dtos/CustomersDTO";
import { Customer } from "@prisma/client";

export interface ICustomerRepository {
  create({ name, cpf, email, telephone }:CustomersDTO ): Promise<void>
  index(): Promise<Customer[]>
  remove(id: string): Promise<void>
  update({ name, cpf, email, telephone }: CustomersDTO, id: string): Promise<void>
  show(cpf: string): Promise<Customer | null>
}