import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required
    ], []),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ], []),
  });

  constructor(public authService: AuthService, ) { }

  ngOnInit(): void {
  }

  login() {
    const {email, password} = this.loginForm.value;
    this.authService.login(email, password)
  }
}
