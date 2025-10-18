import { TablesDTO } from "@/dtos/TablesDTO";
import { TablesRepository } from "@/repositories/implementations/tables-repository";
import { AppError } from "@/utils/AppError";

class TablesLogic {
  private tablesRepository: TablesRepository

  constructor() {
    this.tablesRepository = new TablesRepository()
  }

  async create({ tableNumber }: TablesDTO) {
    await this.tablesRepository.save({
      tableNumber
    })
  }
  
  async update({ tableNumber }: TablesDTO, id: string) {
    await this.tablesRepository.update({
      tableNumber
    }, id)
  }
  
  async index() {
    const tables = await this.tablesRepository.index()

    if(!tables) {
      throw new AppError("Nenhuma mesa encontrada!")
    }

    return tables
  }

  async remove(id: string) {
    await this.tablesRepository.remove(id)
  }

}

export { TablesLogic }