import { WaitersDTO } from "@/dtos/WaitersDTO";
import { Waiter } from "@prisma/client";
import { IWaitersRepository } from "../IWaitersRepository";
import { prisma } from "@/database/prisma";
class WaitersRepository implements IWaitersRepository {
  async save({ name, telephone }: WaitersDTO): Promise<void> {
    await prisma.waiter.create({
      data: {
        name,
        telephone
      }
    })
  }
  async update({ name, telephone }: WaitersDTO, id: string): Promise<void> {
    await prisma.waiter.update({
      data: {
        name,
        telephone
      },
      where: {
        id
      }
    })
  }
  async index(): Promise<Waiter[]> {
    const waiters = await prisma.waiter.findMany()

    return waiters
  }
  async remove(id: string): Promise<void> {
    await prisma.waiter.delete({
      where: {
        id
      }
    })
  }
}

export { WaitersRepository }