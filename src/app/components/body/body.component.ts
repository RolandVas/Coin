import { Component, OnDestroy, OnInit } from '@angular/core'
import { TransactionOfMoney } from 'src/app/_interface/transaction';
import { FirestoreService } from 'src/app/_service/firestore.service';
import { AppService } from '../../_service/app.service'
import { Subject, takeUntil } from 'rxjs'
import { ExpeditureService } from 'src/app/_service/expediture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  constructor(
    private firestore: FirestoreService,
    public expeditureService: ExpeditureService,
    private router: Router,
    public appService: AppService
  ) {}

  ngOnInit(): void {
    this.firestore.getSortedTransactionFromFirebase('transactions')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: TransactionOfMoney[]) => {
        this.appService.groupedTransactions = this.appService.groupTransactionsByDate(data);
        this.appService.getTotalValue();
      });
  }

  getGroupedTransactionKeys(): string[] {
    return Object.keys(this.appService.groupedTransactions);
  }

  deleteTransaction(transaction: TransactionOfMoney) {
    const month = new Date(transaction.date!).getMonth()
    const year = new Date(transaction.date!).getFullYear()
    this.firestore.deleteTransactionFromFirebase(transaction, month, year);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  navigate(transaction: TransactionOfMoney) {
    this.appService.setTransaction(transaction);
    this.router.navigate([transaction.id]);
  }
}
