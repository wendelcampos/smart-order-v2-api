export interface OrdersRequestDTO {
  tableNumber: string
  cpf: string
  waiterName: string
}

export interface OrdersDTO {
  waiterID: string
  customerID: string
  tableID: string
}