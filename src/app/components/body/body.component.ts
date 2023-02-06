import { Component, OnInit } from '@angular/core';
import { TransactionOfMoney } from 'src/app/_interface/transaction';
import { AppServiceService } from 'src/app/_service/app-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  transactions: TransactionOfMoney[] = []

  constructor(private service: AppServiceService) { }

  ngOnInit(): void {
    this.service.getTransaction().subscribe( (data: TransactionOfMoney[]) => {
      this.transactions = data
    })
  }

}
