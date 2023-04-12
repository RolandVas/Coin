import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms'
import { Subject, takeUntil } from 'rxjs'

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: KeypadComponent,
    },
  ],
})

export class KeypadComponent implements OnInit, ControlValueAccessor {

  @Output() amount = new EventEmitter<string>()

  public amountOfMoneyControl = new FormControl() // ControlValueAccessor

  inputValue: string = '';

  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  private destroyed$: Subject<any> = new Subject<any>()

  constructor() { }

  ngOnInit(): void {
    this.amountOfMoneyControl.valueChanges.pipe(
      takeUntil(this.destroyed$),
    ).subscribe(formValue => {
      this.onChange(formValue)
      this.onTouched()
    })
  }

  public ngOnDestroy(): void {
    this.destroyed$.next(true)
    this.destroyed$.complete()
  }

  addNumber(num: number) {
    this.inputValue += num;
  }

  deleteNumber() {
    this.inputValue = this.inputValue.slice(0, -1);
  }

  emitAmountOfMoney(amountOfMoney: string) {
    this.amountOfMoneyControl.patchValue(amountOfMoney)
    // this.amount.emit(amountOfMoney) // Statt ControlValueAccessor hab ich amountOfMoney emitet und im form gepatcht
  }

  /**
   * ControlValueAccessor
   * https://www.youtube.com/watch?v=OrmIfW8Ak3w
   * Beispiel Tim-lib slider.component.ts
   */

  writeValue(obj: any): void {
    this.amountOfMoneyControl.patchValue(obj) // setzt den value von expeditureForm aus expediture-dialog.component in amountOfMoneyControl
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  private onTouched = () => {}

  private onChange = (_: any) => {}
}
