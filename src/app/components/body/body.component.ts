import { Component, OnDestroy, OnInit } from '@angular/core'
import { TransactionOfMoney } from 'src/app/_interface/transaction';
import { FirestoreService } from 'src/app/_service/firestore.service';
import { AppService } from '../../_service/app.service'
import { Subject, takeUntil } from 'rxjs'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>()

  constructor(private firestore: FirestoreService, public appService: AppService) { }

  ngOnInit(): void {
    this.firestore.getTransactionFromFirebase()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: TransactionOfMoney[]) => {
      this.appService.transactions = data
      this.getTotalValue()
    })
  }

  deleteTransaction(transaction: TransactionOfMoney) {
    this.firestore.deleteTransactionFromFirebase(transaction)
  }

  getTotalValue() {
    this.appService.totalAmount = 0
    for (const amount of this.appService.transactions) {
      console.log(amount.amount)
      this.appService.totalAmount += +amount.amount
    }
    console.log(this.appService.totalAmount)
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

}
