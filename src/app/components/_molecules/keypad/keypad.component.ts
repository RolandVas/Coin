import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss']
})
export class KeypadComponent implements OnInit {

  @Output() amount = new EventEmitter<string>()

  inputValue: string = '';
  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() { }

  ngOnInit(): void {
  }

  addNumber(num: number) {
    this.inputValue += num;
  }

  deleteNumber() {
    this.inputValue = this.inputValue.slice(0, -1);
  }

  emitAmountOfMoney(amountOfMoney: string) {
    this.amount.emit(amountOfMoney)
  }

}
