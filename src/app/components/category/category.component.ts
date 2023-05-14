import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public categorys: any = [
    {value: 'restaurant', label: 'Restaurant', img: ''},
    {value: 'shopping', label: 'Shopping', img: ''},
    {value: 'hobby', label: 'Hobby', img: ''},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
