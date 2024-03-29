import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import { MatMenuModule } from '@angular/material/menu'
import { DatePipe } from '@angular/common'
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { environment } from '../environments/environment'
import { provideAuth, getAuth } from '@angular/fire/auth'
import { provideFirestore, getFirestore } from '@angular/fire/firestore'
import { HomeComponent } from './home/home.component'
import { HeadComponent } from './components/head/head.component'
import { BodyComponent } from './components/body/body.component'
import { AddExpenditureComponent } from './components/body/add-expenditure/add-expenditure.component'
import { ExpenditureDialogComponent } from './dialog/expenditure-dialog/expenditure-dialog.component'
import { KeypadComponent } from './components/_molecules/keypad/keypad.component'
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { ExpeditureComponent } from './components/expediture/expediture.component'
import { RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SingUpComponent } from './auth/sing-up/sing-up.component';
import { NavComponent } from './dialog/nav/nav.component';
import { CategoryComponent } from './components/category/category.component';
import { EditCategoryComponent } from './dialog/edit-category/edit-category.component'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadComponent,
    BodyComponent,
    AddExpenditureComponent,
    ExpenditureDialogComponent,
    KeypadComponent,
    ExpeditureComponent,
    LoginComponent,
    SingUpComponent,
    NavComponent,
    CategoryComponent,
    EditCategoryComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatSelectModule,
    MatMenuModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(
      () => initializeApp(environment.firebase)), 
      provideAuth(() => getAuth()), 
      provideFirestore(() => getFirestore(),
  ),
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  providers: [DatePipe, { provide: FIREBASE_OPTIONS, useValue: environment.firebase },],
  bootstrap: [AppComponent],
})
export class AppModule {}


// error: 
// [AngularFirestore -> InjectionToken angularfire2.app.options -> InjectionToken angularfire2.app.options -> InjectionToken angularfire2.app.options -> InjectionToken angularfire2.app.options]
// https://github.com/angular/angularfire/issues/2985
//