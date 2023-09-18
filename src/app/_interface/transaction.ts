import { Categorys } from "./category"

export interface TransactionOfMoney {
  comment?: string
  amount: number
  id?: string
  date?: number
  category?: Categorys
}
