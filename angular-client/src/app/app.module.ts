import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AuthenticationComponent} from "./auth/authentication.component";
import {HeaderComponent} from "./shared/header.component";
import {Routing} from "./app.routing";
import {TeamsComponent} from "./teams/teams.component";
import {ChallengesComponent} from "./challenges/challenges.component";
import {HomeComponent} from "./home/home.component";
import {JudgeComponent} from "./judge/judge.component";
import {SignupComponent} from "./auth/signup.component";
import {SigninComponent} from "./auth/signin.component";
import {ChallengeComponent} from "./challenges/challenge.component";
import {ChallengeInputComponent} from "./challenges/challenge-input.component";
import {ChallengeListComponent} from "./challenges/challenge-list.component";
import {AuthService} from "./auth/auth.service";
import {ErrorService} from "./errors/error.service";
import {ErrorComponent} from "./errors/error.component";
import {AccountComponent} from "./auth/account.component";
import {CanActivateViaAuthGuard} from "./auth/can-activate";

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HeaderComponent,
    TeamsComponent,
    ChallengesComponent,
    ChallengeComponent,
    ChallengeInputComponent,
    ChallengeListComponent,
    HomeComponent,
    JudgeComponent,
    SignupComponent,
    SigninComponent,
    ErrorComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    ReactiveFormsModule
  ],
  providers: [AuthService, ErrorService, CanActivateViaAuthGuard], //provide to all of the application
  bootstrap: [AppComponent]
})
export class AppModule { }
