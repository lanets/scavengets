import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from './shared/modules/header/header.component';
import {Routing} from './app.routing';
import {TeamsComponent} from './modules/teams/teams.component';
import {ChallengesComponent} from './modules/challenges/challenges.component';
import {HomeComponent} from './modules/home/home.component';
import {JudgeComponent} from './modules/judge/judge.component';
import {ChallengeComponent} from './modules/challenges/challenge.component';
import {ChallengeInputComponent} from './modules/challenges/challenge-input.component';
import {ChallengeListComponent} from './modules/challenges/challenge-list.component';
import {AuthService} from './shared/services/auth.service';
import {ErrorService} from './shared/services/error.service';
import {CanActivateAuthentificationGuard} from './modules/authentication/authentication-guard';

import { ErrorModule } from '@shared-modules';
import { AuthenticationModule } from '@app-modules';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    ReactiveFormsModule,

    ErrorModule,
    AuthenticationModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamsComponent,
    ChallengesComponent,
    ChallengeComponent,
    ChallengeInputComponent,
    ChallengeListComponent,
    HomeComponent,
    JudgeComponent,
  ],
  providers: [
    AuthService,
    ErrorService,
    CanActivateAuthentificationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
