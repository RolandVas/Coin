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

  user$ = this.auth.user

  constructor(
    public dialogRef: MatDialogRef<NavComponent>,
    private router: Router,
    private authService: AuthService,
    private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  closSideNav() {
    this.dialogRef.close();
  }

  navigateToCategory(){
    this.router.navigate(['category']);
    this.dialogRef.close();
  }

  logout() {
    this.authService.logout()
    this.dialogRef.close();
  }

}
