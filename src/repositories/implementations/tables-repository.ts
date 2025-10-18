import { TablesDTO } from "@/dtos/TablesDTO";
import { Table } from "@prisma/client";
import { ITablesRepository } from "../ITablesRepository";
import { prisma } from "@/database/prisma";

class TablesRepository implements ITablesRepository {
  async save({ tableNumber }: TablesDTO): Promise<void> {
   await prisma.table.create({
    data: {
      tableNumber
    }
   })
  }
  async update({ tableNumber }: TablesDTO, id: string): Promise<void> {
    await prisma.table.update({
      data: {
        tableNumber
      },
      where: {
        id
      }
    })
  }
  async index(): Promise<Table[]> {
    const tables = await prisma.table.findMany({
      orderBy: {
        tableNumber: 'asc'
      }
    })

    return tables
  }
  async remove(id: string): Promise<void> {
    await prisma.table.delete({
      where: {
        id
      }
    })
  }

  async updateStatusTable(id: string, status: 'open' | 'closed'): Promise<void> {
    await prisma.table.update({
      where: {
        id
      },
      data: {
        status
      }
    })
  }

}

export { TablesRepository }