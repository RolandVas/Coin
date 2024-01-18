import { Component, Inject, OnInit } from '@angular/core'
import { Categorys } from '../../_interface/category'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Categorys,
    public dialogRef: MatDialogRef<EditCategoryComponent>,
    ) { }

  ngOnInit(): void {
    console.log('data', this.data)
  }

}
