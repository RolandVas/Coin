import { Injectable } from '@angular/core';
import { TransactionOfMoney } from '../_interface/transaction';

@Injectable({
  providedIn: 'root'
})
export class ExpeditureService {

  public transaction: TransactionOfMoney | undefined

  constructor() { }
}
