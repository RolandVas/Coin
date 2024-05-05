import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FirestoreService } from 'src/app/_service/firestore.service';
import { TransactionOfMoney } from 'src/app/_interface/transaction';
import { Categorys } from 'src/app/_interface/category';

@Component({
  selector: 'app-expenditure-dialog',
  templateUrl: './expenditure-dialog.component.html',
  styleUrls: ['./expenditure-dialog.component.scss']
})
export class ExpenditureDialogComponent implements OnInit {

  private currentMonth: number = new Date().getMonth() + 1
  private currentYear: number = new Date().getFullYear()

  public categorysFormFirebase: Categorys[] | undefined

  expeditureForm: FormGroup = new FormGroup ({
    comment: new FormControl(),
    amount: new FormControl('', Validators.required),
    date: new FormControl(),
    category: new FormControl('', Validators.required),
  })

  constructor(
    public dialogRef: MatDialogRef<ExpenditureDialogComponent>,
    public appService: FirestoreService,
    ) {

  }

  ngOnInit(): void {
    this.appService.getCategorysFromFirebase('categorys').subscribe((category: Categorys[]) => 
    this.categorysFormFirebase = category
    )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    const date: any = Date.now()
    this.expeditureForm.controls['date'].setValue(date)
    this.expeditureForm.patchValue({date: date})
    const transaction = {
      year: this.currentYear,
      month: this.currentMonth,
      data: this.expeditureForm.value
    }
    this.appService.saveTransactionOnFirebase(transaction, 'transactions')
    this.dialogRef.close();
  }

}
