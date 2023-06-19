import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  category: string = ''
  categoryObj: any
  editBTN: boolean = false

  public categorys: any = [
    {value: 'restaurant', label: 'Restaurant', img: ''},
    {value: 'shopping', label: 'Shopping', img: ''},
    {value: 'hobby', label: 'Hobby', img: ''},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addCategory() {
    this.categorys.push({value: this.category, label: this.category, img: ''})
    this.category = ''
  }

  editCategory(category: any) {
    this.editBTN = true
    this.categoryObj = category
    this.category = category.label
  }

  update() {
    const index = this.categorys.indexOf(this.categoryObj)
    this.categoryObj.label = this.category
    this.categorys[index] = this.categoryObj
    this.editBTN = false
    this.category = ''
  }

  delete() {
    const index = this.categorys.indexOf(this.categoryObj)
    this.categorys.splice(index, 1)
    this.editBTN = false
    this.category = ''
  }

}
