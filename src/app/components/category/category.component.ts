import { Component, OnInit } from '@angular/core';
import { Categorys } from 'src/app/_interface/category';
import { FirestoreService } from 'src/app/_service/firestore.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  imageSources = [
    {path: 'assets/icons/cart.png', selected: false},
    {path: 'assets/icons/bike.png', selected: false},
    {path: 'assets/icons/car.png', selected: false},
    {path: 'assets/icons/hobby.png', selected: false},
    {path: 'assets/icons/hobby_1.png', selected: false},
    {path: 'assets/icons/home.png', selected: false},
    {path: 'assets/icons/internet.png', selected: false},
    {path: 'assets/icons/pet.png', selected: false},
    {path: 'assets/icons/shop.png', selected: false},
    {path: 'assets/icons/tv.png', selected: false},
    {path: 'assets/icons/vehicle.png', selected: false},
    {path: 'assets/icons/watering-can.png', selected: false},
  ];

  public categoryLabel: string = ''
  public category: Categorys = {}
  public categorysFormFirebase: Categorys[] | undefined

  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {
    this.firestore.getCategorysFromFirebase('categorys').subscribe((category: Categorys[]) => 
    this.categorysFormFirebase = category
    )
  }

  updateInputValue() {
    this.category.label = this.categoryLabel
    this.firestore.saveTransactionOnFirebase(this.category, 'categorys')
    this.categoryLabel = ''
    this.imageSources.forEach(img => img.selected = false);
  }

  select(imgPath: string) {
    this.imageSources.forEach(img => img.selected = false);
    this.category.img = imgPath

    const selectedImage = this.imageSources.find(img => img.path === imgPath);
    if (selectedImage) {
      selectedImage.selected = true;
    }
  }



}
