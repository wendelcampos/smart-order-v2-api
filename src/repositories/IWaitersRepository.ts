import { WaitersDTO } from "@/interfaces/WaitersDTO";
import { Waiter } from "@prisma/client";

export interface IWaitersRepository {
  save({ name, telephone }: WaitersDTO): Promise<void>
  update({ name, telephone }: WaitersDTO, id: string): Promise<void>
  index(): Promise<Waiter[] | null>
  remove(id: string): Promise<void>
}