import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isSideNavOpen = false;

  user$ = this.auth.user

  constructor(
    private router: Router,
    private authService: AuthService,
    private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  navigateToHome() {
    this.router.navigate(['']);
    this.isSideNavOpen = false;
  }

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  closeSideNav() {
    this.isSideNavOpen = false;
  }


  navigateToCategory(){
    this.router.navigate(['category']);
    this.isSideNavOpen = false;
  }

  logout() {
    this.authService.logout()
    this.isSideNavOpen = false;
  }

}
