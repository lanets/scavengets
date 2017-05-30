import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AuthenticationComponent} from './modules/authentification/authentication.component';
import {HeaderComponent} from './shared/modules/header/header.component';
import {Routing} from './app.routing';
import {TeamsComponent} from './modules/teams/teams.component';
import {ChallengesComponent} from './modules/challenges/challenges.component';
import {HomeComponent} from './modules/home/home.component';
import {JudgeComponent} from './modules/judge/judge.component';
import {SignupComponent} from './modules/authentification/signup.component';
import {SigninComponent} from './modules/authentification/signin.component';
import {ChallengeComponent} from './modules/challenges/challenge.component';
import {ChallengeInputComponent} from './modules/challenges/challenge-input.component';
import {ChallengeListComponent} from './modules/challenges/challenge-list.component';
import {AuthService} from './shared/services/auth.service';
import {ErrorService} from './shared/services/error.service';
import {AccountComponent} from './modules/authentification/account.component';
import {CanActivateViaAuthGuard} from './modules/authentification/can-activate';

import { ErrorModule } from '@shared-modules';


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
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    ReactiveFormsModule,

    ErrorModule
  ],
  providers: [
    AuthService,
    ErrorService,
    CanActivateViaAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
