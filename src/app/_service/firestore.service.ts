import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TransactionOfMoney } from '../_interface/transaction';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  transactions: string = 'transactions'

  constructor(private firestore: AngularFirestore) {
   }

  saveTransactionOnFirebase(transaction: TransactionOfMoney) {
    this.firestore
    .collection(this.transactions)
    .add(transaction)
    .then( (doc ) => {
      this.updateDocWithId(doc.id)
      console.log('save data on Firebase')
    });
  }

  updateDocWithId(id: any) {
    this.firestore
      .collection(this.transactions)
      .doc(id)
      .update({ id: id })
  }

  getTransactionFromFirebase() {
    return this.firestore.collection<TransactionOfMoney>(this.transactions).valueChanges();
  }

  deleteTransactionFromFirebase(transaction: any) {
    this.firestore
    .collection(this.transactions)
    .doc(transaction.id)
    .delete()
  }

}
