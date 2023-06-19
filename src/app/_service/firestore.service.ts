import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay'
import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { TransactionOfMoney } from '../_interface/transaction'
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {

  transactions: string = 'transactions'

  constructor(private firestore: AngularFirestore, private authService: AuthService) {
  }

  saveTransactionOnFirebase(transaction: TransactionOfMoney) {
    this.firestore
      .collection('users')
      .doc(this.authService.userData.uid)
      .collection(this.transactions)
      .add(transaction)
      .then((doc: any) => {
        this.updateDocWithId(doc.id)
      })
  }

  updateDocWithId(id: any) {
    this.firestore
      .collection('users')
      .doc(this.authService.userData.uid)
      .collection(this.transactions)
      .doc(id)
      .update({ id: id })
  }

  getTransactionFromFirebase() {
    let user = this.authService.getCurrentUser()
    return this.firestore
      .collection('users')
      .doc(user.uid)
      .collection<TransactionOfMoney>(this.transactions)
      .valueChanges()
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
