import { CustomersDTO } from "@/dtos/CustomersDTO";
import { CustomersRepository } from "@/repositories/implementations/customers-repository";
import { AppError } from "@/utils/AppError";

class CustomersLogic {
  private customersRepository: CustomersRepository

  constructor() {
    this.customersRepository = new CustomersRepository()
  }
  async create({ name, cpf, email, telephone }: CustomersDTO) {
    await this.customersRepository.create({
      name,
      cpf,
      email,
      telephone
    })
  }
  async index() {
    const customers = await this.customersRepository.index()

    if(!customers.length) {
      throw new AppError("Nenhum cliente encontrado")
    } 

    return customers
  }
  async remove(id: string) {
    await this.customersRepository.remove(id)
  }
  async update({ name, cpf, email, telephone }: CustomersDTO, id: string) {
    const customer = await this.customersRepository.show(id)

    if(!customer) {
      throw new AppError("Nenhum cliente encontrado")
    }

    await this.customersRepository.update({
      name,
      cpf,
      email,
      telephone
    }, id)
  }
  async show(id: string) {
    const customer = await this.customersRepository.show(id)

    return customer
  }
}

export { CustomersLogic }