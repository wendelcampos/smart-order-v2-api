import { TablesDTO } from "@/interfaces/TablesDTO";
import { Table } from "@prisma/client";

export interface ITablesRepository {
  save({ tableNumber }: TablesDTO): Promise<void>
  update({ tableNumber }: TablesDTO, id: string): Promise<void>
  index(): Promise<Table[]>
  remove(id: string): Promise<void>
}