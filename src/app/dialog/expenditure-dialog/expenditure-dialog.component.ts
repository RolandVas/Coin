import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AppServiceService } from 'src/app/_service/app-service.service';
import { TransactionOfMoney } from 'src/app/_interface/transaction';

@Component({
  selector: 'app-expenditure-dialog',
  templateUrl: './expenditure-dialog.component.html',
  styleUrls: ['./expenditure-dialog.component.scss']
})
export class ExpenditureDialogComponent implements OnInit {

  expeditureForm: FormGroup = new FormGroup ({
    comment: new FormControl(),
    amount: new FormControl('', Validators.required)
  })

  constructor(
    public dialogRef: MatDialogRef<ExpenditureDialogComponent>,
    public appService: AppServiceService
    ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    const transaction: TransactionOfMoney = this.expeditureForm.value
    this.appService.saveTransactionOnFirebase(transaction)
    console.log('expeditureForm submitted')
    this.dialogRef.close();
  }

  addAmountOfMoneyToForm(amountOfMoney: string) {
    this.expeditureForm.controls['amount'].setValue(amountOfMoney)
  }

}
