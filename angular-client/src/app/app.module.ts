import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from './shared/modules/header/header.component';
import {Routing} from './app.routing';
import {TeamsComponent} from './modules/teams/teams.component';
import {AuthService} from './shared/services/auth.service';
import {ErrorService} from './shared/services/error.service';
import {CanActivateAuthentificationGuard} from './modules/authentication/authentication-guard';

import { ErrorModule } from '@shared-modules';
import { AuthenticationModule, ChallengesModule, HomeModule, JudgeModule } from '@app-modules';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    ReactiveFormsModule,

    HomeModule,
    ErrorModule,
    AuthenticationModule,
    ChallengesModule,
    JudgeModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamsComponent,
  ],
  providers: [
    AuthService,
    ErrorService,
    CanActivateAuthentificationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
