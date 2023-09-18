import { Component, OnInit } from '@angular/core';
import { Categorys } from 'src/app/_interface/category';
import { FirestoreService } from 'src/app/_service/firestore.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  imageSources: string[] = [
    'assets/icons/cart.png',
    'assets/icons/art.png',
    'assets/icons/bike.png',
    'assets/icons/car.png',
    'assets/icons/hobby.png',
    'assets/icons/hobby_1.png',
    'assets/icons/home.png',
    'assets/icons/internet.png',
    'assets/icons/pet.png',
    'assets/icons/shop.png',
    'assets/icons/tv.png',
    'assets/icons/vehicle.png',
    'assets/icons/watering-can.png',
  ];

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

  select(imgPath: string) {
    this.category.img = imgPath
  }



}
