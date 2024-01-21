import { Injectable } from '@angular/core'
import { Auth, authState, updateProfile } from '@angular/fire/auth'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router'
import { from } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  userData: any

  isAuthenticated: boolean | undefined

  readonly isLoggedIn = authState(this.auth)

  currentUserID: string = ''

  constructor(private authFire: AngularFireAuth, private router: Router, private auth: Auth) {
    this.authFire.authState.subscribe((user) => {
      if (user) {
        this.userData = user
        localStorage.setItem('user', JSON.stringify(this.userData))
        const storedUser = localStorage.getItem('user')
        if (storedUser !== null) {
          JSON.parse(storedUser)
          this.userData = JSON.parse(storedUser)
        }
      } else {
        localStorage.setItem('user', '')
        const storedUser = localStorage.getItem('user')
        if (storedUser !== null) {
          JSON.parse(storedUser)
        }
      }
    })
  }

  getCurrentUser(): any {
    let user
    let text = localStorage.getItem('user')
    if (text) {
      user = JSON.parse(text)
    }
    return user
  }

  login(email: string, password: string) {
    return from(this.authFire.signInWithEmailAndPassword(email, password)).subscribe((user: any) => {
      this.currentUserID = user.user.uid
      this.isAuthenticated = true
      this.router.navigate([''])
    })
  }

  signup(userName: string, email: string, password: string) {
    return this.authFire.createUserWithEmailAndPassword(email, password).then(user => {
      this.router.navigate([''])
      user.user?.updateProfile({
        displayName: userName,
      })
    })
  }

  logout() {
    return from(this.authFire.signOut()).subscribe(() => {
      this.isAuthenticated = false
      this.router.navigate(['/login'])
    })
  }

}
