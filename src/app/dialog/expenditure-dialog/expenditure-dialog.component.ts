import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-expenditure-dialog',
  templateUrl: './expenditure-dialog.component.html',
  styleUrls: ['./expenditure-dialog.component.scss']
})
export class ExpenditureDialogComponent implements OnInit {

  public amount: number | string = ''

  constructor(public dialogRef: MatDialogRef<ExpenditureDialogComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
