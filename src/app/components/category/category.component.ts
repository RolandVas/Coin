import { Component, OnInit } from '@angular/core';
import { Categorys } from 'src/app/_interface/category';
import { FirestoreService } from 'src/app/_service/firestore.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public categoryLabel: string = ''
  public category: Categorys = {}
  public categorysFormFirebase: Categorys[] | undefined

  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {
    this.firestore.getTransactionFromFirebase('categorys').subscribe((category: Categorys[]) => 
    this.categorysFormFirebase = category
    )
  }

  updateInputValue() {
    this.category.label = this.categoryLabel
    this.firestore.saveTransactionOnFirebase(this.category, 'categorys')
    this.categoryLabel = ''
  }

  select(icon: string) {
    
  }

}
