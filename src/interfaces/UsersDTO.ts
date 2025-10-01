import { UserRole } from "@prisma/client"

export interface UsersDTO {
  name: string
  email: string
  password: string,
  role: UserRole
}