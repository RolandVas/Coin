import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators, } from '@angular/forms';
import { AuthService } from 'src/app/_service/auth.service';

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// password and confirm password validation in Angular
// https://aliasger.dev/quick-notes-implement-password-and-confirm-password-validation-in-angular
///////////////////////////////////////////////////////////////////////////////////////////////////////////
export class CustomValidators {
  static MatchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value ? { mismatch: true } : null;
    };
  }
}

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ], []),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") // This is the regex Angular email validation pattern
    ], []),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ], []),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ], []),
  }, [CustomValidators.MatchValidator('password', 'confirmPassword')]);

  get passwordMatchError() {
    return (
      this.registerForm.getError('mismatch') &&
      this.registerForm.get('confirmPassword')?.touched
    );
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  createUser() {
    const {userName, email, password} = this.registerForm.value;
    this.authService.signup(userName, email, password)
  }

}
