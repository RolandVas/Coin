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

  public transactions: TransactionOfMoney[] = [];

  public groupedTransactions: { [key: string]: TransactionOfMoney[] } = {};

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
        this.transactions = data
        this.groupedTransactions = this.appService.groupTransactionsByDate(this.transactions);
        this.getTotalValue();
      });
  }

  getGroupedTransactionKeys(): string[] {
    return Object.keys(this.groupedTransactions);
  }

  deleteTransaction(transaction: TransactionOfMoney) {
    this.firestore.deleteTransactionFromFirebase(transaction);
  }

  getTotalValue() {
    this.appService.totalAmount = 0;
    for (const amount of this.appService.transactions) {
      this.appService.totalAmount += +amount.amount;
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  navigate(id?: string) {
    this.router.navigate([id]);
  }

  sortTransactionsByDate(transactions: TransactionOfMoney[]): TransactionOfMoney[] {
    return transactions.sort((a, b) => (b.date || 0) - (a.date || 0));
  }
}
