import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/compat/firestore';
import { TransactionOfMoney } from '../_interface/transaction';
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {

  transactions: string = 'transactions'
  categorys: string = 'categorys'

  constructor(private firestore: AngularFirestore, private authService: AuthService) {
  }

  saveTransactionOnFirebase(transaction: any, category: string) {
    this.firestore
      .collection('users')
      .doc(this.authService.userData.uid)
      .collection(category, ref => ref.orderBy('date', 'desc'))
    .add(transaction)
    .then( (doc: any) => {
      this.updateDocWithId(doc.id, transaction, category)
    });
  }

  updateDocWithId(id: string, transaction: string, category: string) {
    this.firestore
      .collection('users')
      .doc(this.authService.userData.uid)
      .collection(category)
      .doc(id)
      .update({ id: id })
  }

  updateDoc(category: string, transaction: any, categoryObject: any) {
    this.firestore
      .collection('users')
      .doc(this.authService.userData.uid)
      .collection(category)
      .doc(transaction)
      .update({ category: categoryObject })
  }

  getTransactionFromFirebase(value: string) {
    let user = this.authService.getCurrentUser()
    return this.firestore
      .collection('users')
      .doc(user.uid)
      .collection<any>(value)
      .valueChanges();
  }

  getSortedTransactionFromFirebase(value: string) {
    let user = this.authService.getCurrentUser()
    return this.firestore
      .collection('users')
      .doc(user.uid)
      .collection<any>(value, ref => ref.orderBy('date', 'desc'))
      .valueChanges();
  }

  deleteTransactionFromFirebase(transaction: any) {
    this.firestore
      .collection('users')
      .doc(this.authService.userData.uid)
      .collection<TransactionOfMoney>(this.transactions)
      .doc(transaction.id)
      .delete()
  }

  getOneTransactionFromFirebase(id: string) {
    return this.firestore
      .collection('users')
      .doc(this.authService.userData.uid)
      .collection<TransactionOfMoney>(this.transactions)
      .doc(id)
      .valueChanges()
  }

}
