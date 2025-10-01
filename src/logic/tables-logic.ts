import { TablesDTO } from "@/interfaces/TablesDTO";
import { TablesRepository } from "@/repositories/implementations/tables-repository";

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

    return tables
  }

  async remove(id: string) {
    await this.tablesRepository.remove(id)
  }

}

export { TablesLogic }