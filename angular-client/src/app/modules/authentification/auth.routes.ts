import { Routes } from '@angular/router';
import { SigninComponent, SignupComponent } from './index';


export const AUTH_ROUTES: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
];
