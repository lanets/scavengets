import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AuthenticationComponent} from "./auth/authentication.component";
import {HeaderComponent} from "./shared/header.component";
import {Routing} from "./app.routing";
import {TeamsComponent} from "./teams/teams.component";
import {ChallengesComponent} from "./challenges/challenges.component";
import {HomeComponent} from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HeaderComponent,
    TeamsComponent,
    ChallengesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
