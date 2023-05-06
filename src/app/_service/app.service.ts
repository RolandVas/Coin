import { Injectable } from '@angular/core';
import { TransactionOfMoney } from '../_interface/transaction'
import { FirestoreService } from './firestore.service'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public totalAmount: number = 0

  public transactions: TransactionOfMoney[] = []

  constructor() {
  }


}
