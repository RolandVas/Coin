import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpeditureComponent } from './components/expediture/expediture.component';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SingUpComponent } from './auth/sing-up/sing-up.component';
import { CategoryComponent } from './components/category/category.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectAuthorizedToHome = () => redirectLoggedInTo(['']);

const routes: Routes = [
/*   {
    path: '', component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: ':id', component: ExpeditureComponent, 
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'login', component: LoginComponent, 
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectAuthorizedToHome }
  },
  {
    path: 'signup', component: SingUpComponent, 
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectAuthorizedToHome }
  }, */

  {
    path: '', component: HomeComponent,

  },
  {
    path: 'ex/:id', component: ExpeditureComponent, 

  },
  {
    path: 'login', component: LoginComponent, 

  },
  {
    path: 'signup', component: SingUpComponent, 

  },
  {
    path: 'category', component: CategoryComponent, 

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
