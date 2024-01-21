import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private fb: FormBuilder) { }

  public createExpeditureForm() {
    return this.fb.group({
      comment: new FormControl(),
      amount: new FormControl('', Validators.required),
      date: new FormControl(),
      category: new FormControl('', Validators.required),
    })
  }

  public createCategoyForm() {
    return this.fb.group({
      label: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
      id: new FormControl(),
    })
  }

}
