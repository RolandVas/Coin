import { Injectable } from '@angular/core';
import { TransactionOfMoney } from '../_interface/transaction'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public totalAmount: number = 0

  public transactions: TransactionOfMoney[] = []

  constructor() {
  }


}
