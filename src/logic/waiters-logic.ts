import { WaitersDTO } from "@/dtos/WaitersDTO"
import { WaitersRepository } from "@/repositories/implementations/waiters-repository"
import { AppError } from "@/utils/AppError"

class WaitersLogic {
  private waitersRepository: WaitersRepository

  constructor() {
    this.waitersRepository = new WaitersRepository()
  }
  async create({ name, telephone }: WaitersDTO) {
    await this.waitersRepository.save({
      name,
      telephone
    })
  }

  async update({ name, telephone }: WaitersDTO, id: string) {
    await this.waitersRepository.update({
      name,
      telephone
    }, id)
  }

  async index() {
    const waiters = await this.waitersRepository.index()

    if(!waiters.length) {
      throw new AppError("Nenhum Garçon encontrado!")
    }

    return waiters
  }

  async remove(id: string) {
    await this.waitersRepository.remove(id)
  }

}

export { WaitersLogic }