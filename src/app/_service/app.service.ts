import { Injectable } from '@angular/core';
import { TransactionOfMoney } from '../_interface/transaction'

interface GroupedTransactions {
  [key: string]: TransactionOfMoney[];
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private currentMonth: number = new Date().getMonth() + 1

  public totalAmount: number = 0

  public groupedTransactions: { [key: string]: TransactionOfMoney[] } = {}

  private currentTransaction: TransactionOfMoney | undefined

  constructor() {
    console.log(this.currentMonth)
  }

  groupTransactionsByDate(transactions: TransactionOfMoney[]): { [key: string]: TransactionOfMoney[] } {
    const groupedTransactions: { [key: string]: TransactionOfMoney[] } = {};

    transactions.forEach(transaction => {
      const dateKey = new Date(transaction.date!).toLocaleDateString();

      // Hier wird überprüft, ob es bereits ein Array für das gegebene Datum (dateKey) 
      // im groupedTransactions-Objekt gibt. Wenn es keins gibt, wird eines erstellt.
      if (!groupedTransactions[dateKey]) {
        groupedTransactions[dateKey] = [];
      }
      // Nachdem sichergestellt ist, dass ein Array für das aktuelle Datum vorhanden ist, 
      // wird die aktuelle Transaktion zu diesem Array hinzugefügt.
      groupedTransactions[dateKey].push(transaction);
    });

    return groupedTransactions;
  }

  getTotalValue() {
    this.totalAmount = this.calculateTotalAmount(this.groupedTransactions)
  } 

  calculateTotalAmount(data: GroupedTransactions | TransactionOfMoney[]): number {
    if (Array.isArray(data)) {
      // Wenn es sich um ein Array von Transaktionen handelt
      return data.reduce((sum, transaction) => +sum + +transaction.amount!, 0);
    } else {
      // Wenn es sich um ein Objekt von gruppierten Transaktionen handelt
      let totalAmount = 0;
      for (const dateKey in data) {
        if (data.hasOwnProperty(dateKey)) {
          totalAmount += this.calculateTotalAmount(data[dateKey]);
        }
      }
      return totalAmount;
    }
  }

  setTransaction(transaction: TransactionOfMoney) {
    this.currentTransaction = transaction;
  }

  getTransaction(): TransactionOfMoney | undefined {
    return this.currentTransaction;
  }

}
