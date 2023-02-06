import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { TransactionOfMoney } from '../_interface/transaction';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  transactionsFromFirebase: Observable<TransactionOfMoney[]>

  constructor(private firestore: AngularFirestore) {
    this.transactionsFromFirebase = this.getTransactionFromFirebase()
   }

  saveTransactionOnFirebase(transaction: TransactionOfMoney) {
    this.firestore
    .collection('transaction')
    .add(transaction)
    .then( () => {
      console.log('save data on Firebase')
    });
  }

  getTransactionFromFirebase() {
    return this.firestore.collection<TransactionOfMoney>('transaction').valueChanges();
  }

  getTransaction() {
    return this.transactionsFromFirebase   
  }

}
