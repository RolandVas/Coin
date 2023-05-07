import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean | undefined;

  constructor(private auth: AngularFireAuth, private router: Router) { }

  login(email: string, password: string) {
    return from(this.auth.signInWithEmailAndPassword(email, password)).subscribe(()=>{
      this.isAuthenticated = true;
      this.router.navigate([''])
    })
  }

  signup(userName: string, email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password).then( user => {
      this.router.navigate([''])
      console.log('save user: ', this.auth)
      user.user?.updateProfile({
        displayName: userName,
      })
      // this.saveUserInFirabase()
    })
  }

  logout() {
    return from(this.auth.signOut()).subscribe(()=>{
      this.isAuthenticated = false;
      this.router.navigate(['/login'])
    })
  }


}
