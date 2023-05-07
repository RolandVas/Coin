import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FirestoreService } from 'src/app/_service/firestore.service';
import { TransactionOfMoney } from 'src/app/_interface/transaction';

interface category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-expenditure-dialog',
  templateUrl: './expenditure-dialog.component.html',
  styleUrls: ['./expenditure-dialog.component.scss']
})
export class ExpenditureDialogComponent implements OnInit {

  expeditureForm: FormGroup = new FormGroup ({
    comment: new FormControl(),
    amount: new FormControl('', Validators.required),
    date: new FormControl(),
    category: new FormControl(),
  })

  public categorys: category[] = [
    {value: 'restaurant', viewValue: 'Restaurant'},
    {value: 'shopping', viewValue: 'Shopping'},
    {value: 'hobby', viewValue: 'Hobby'},
  ]

  constructor(
    public dialogRef: MatDialogRef<ExpenditureDialogComponent>,
    public appService: FirestoreService,
    ) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    const date: any = Date.now()
    this.expeditureForm.controls['date'].setValue(date)
    console.log(this.expeditureForm)
    const transaction: TransactionOfMoney = this.expeditureForm.value
    this.appService.saveTransactionOnFirebase(transaction)
    console.log('expeditureForm submitted')
    this.dialogRef.close();
  }

}
