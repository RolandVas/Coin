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
      .doc(`${transaction.year}`)
      .collection(`${transaction.month}`)
      .add(transaction.data)
      .then( (doc: any) => {
        console.log('save')
        this.updateDocWithId(doc.id, transaction, category)
      });
  }

  updateDocWithId(id: string, transaction: any, category: string) {
    this.firestore
      .collection('users')
      .doc(this.authService.userData.uid)
      .collection(category)
      .doc(`${transaction.year}`)
      .collection(`${transaction.month}`)
      .doc(id)
      .update({ id: id })
  }

  getTransactionFromFirebase(value: string) {
    let user = this.authService.getCurrentUser()
    return this.firestore
      .collection('users')
      .doc(user.uid)
      .collection<any>(value)
      .doc('2024')
      .collection('5')
      .valueChanges();
  }

  getSortedTransactionFromFirebase(value: string) {
    let user = this.authService.getCurrentUser()
    return this.firestore
      .collection('users')
      .doc(user.uid)
      .collection<any>(value, ref => ref.orderBy('date', 'desc'))
      .doc('2024')
      .collection('5')
      .valueChanges();
  }

  deleteTransactionFromFirebase(transaction: any, month: number, year: number) {
    this.firestore
      .collection('users')
      .doc(this.authService.userData.uid)
      .collection<TransactionOfMoney>(this.transactions)
      .doc(`${year}`)
      .collection(`${month}`)
      .doc(transaction.id)
      .delete()
  }


  // braucht man das würklich für expediture.component? im appService kann man das transaction ja speichern
  getOneTransactionFromFirebase(transaction: any, month: number, year: number) {
    return this.firestore
      .collection('users')
      .doc(this.authService.userData.uid)
      .collection<TransactionOfMoney>(this.transactions)
      .doc(`${year}`)
      .collection(`${month}`)
      .doc(transaction.id)
      .valueChanges()
  }

  getCategorysFromFirebase(value: string) {
    let user = this.authService.getCurrentUser()
    return this.firestore
      .collection('users')
      .doc(user.uid)
      .collection<any>(value)
      .valueChanges();
  }

}
