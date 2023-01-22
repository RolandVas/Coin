import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExpenditureDialogComponent } from 'src/app/dialog/expenditure-dialog/expenditure-dialog.component';

@Component({
  selector: 'app-add-expenditure',
  templateUrl: './add-expenditure.component.html',
  styleUrls: ['./add-expenditure.component.scss']
})
export class AddExpenditureComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogToAddExpenditure() {
    this.dialog.open(ExpenditureDialogComponent)
  }

}
