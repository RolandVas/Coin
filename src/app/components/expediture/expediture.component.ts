import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionOfMoney } from 'src/app/_interface/transaction';
import { ExpeditureService } from 'src/app/_service/expediture.service';
import { FirestoreService } from 'src/app/_service/firestore.service';

@Component({
  selector: 'app-expediture',
  templateUrl: './expediture.component.html',
  styleUrls: ['./expediture.component.scss']
})
export class ExpeditureComponent implements OnInit {

  public expeditureUrlID: string | null = null

  public transaction: TransactionOfMoney | undefined

  constructor(public expeditureService: ExpeditureService,
    public firebaseService: FirestoreService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.expeditureUrlID = paramMap.get('id');
    })

    if (this.expeditureUrlID) {
      this.firebaseService
        .getOneTransactionFromFirebase(this.expeditureUrlID)
        .subscribe((data?: TransactionOfMoney) =>
          this.transaction = data
        )
    }

  }

  editExpediture() {
    console.log(this.expeditureUrlID)

  }

  deleteExpediture() {
    this.router.navigate(['']);
  }

}
