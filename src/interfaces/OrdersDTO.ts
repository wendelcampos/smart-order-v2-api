export interface OrdersRequestDTO {
  tableNumber: string
  cpf: string
  waiterName: string
}

export interface OrdersDTO {
  waiterId: string
  customerId: string
  tableId: string
}