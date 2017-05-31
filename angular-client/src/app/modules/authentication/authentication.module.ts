import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AccountComponent, SigninComponent, SignupComponent, AuthenticationComponent } from './index';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    ReactiveFormsModule
  ],
  declarations: [
    AuthenticationComponent,
    AccountComponent,
    SignupComponent,
    SigninComponent
  ],
  exports: [
    AuthenticationComponent,
    AccountComponent,
    SigninComponent,
    SignupComponent
  ]
})

export class AuthenticationModule { }
