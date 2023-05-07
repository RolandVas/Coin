import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExpenditureDialogComponent } from 'src/app/dialog/expenditure-dialog/expenditure-dialog.component';
import { NavComponent } from 'src/app/dialog/nav/nav.component';

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
    this.dialog.open(ExpenditureDialogComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal'
    })
  }

  openSideNav() {
    this.dialog.open(NavComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '350px',
      position: {left: '0px'},
      panelClass: 'full-screen-modal'
    })

  }

}
