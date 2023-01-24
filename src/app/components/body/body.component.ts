import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  public input: string | undefined

  constructor() { }

  ngOnInit(): void {
  }

  inputValue = '';
  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  addNumber(num: number) {
    this.inputValue += num;
  }

  deleteNumber() {
    this.inputValue = this.inputValue.slice(0, -1);
  }


}
 