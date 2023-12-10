import { Injectable } from '@angular/core';
import { TransactionOfMoney } from '../_interface/transaction'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public totalAmount: number = 0

  public transactions: TransactionOfMoney[] = []

  constructor() {
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


}
