import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { NgNumericKeyboardModule } from 'ng-numeric-keyboard';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';
import { HeadComponent } from './components/head/head.component';
import { BodyComponent } from './components/body/body.component';
import { AddExpenditureComponent } from './components/body/add-expenditure/add-expenditure.component';
import { ExpenditureDialogComponent } from './dialog/expenditure-dialog/expenditure-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadComponent,
    BodyComponent,
    AddExpenditureComponent,
    ExpenditureDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    NgNumericKeyboardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
