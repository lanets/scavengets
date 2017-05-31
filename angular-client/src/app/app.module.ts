import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';

import { HeaderComponent, ErrorModule } from '@shared-modules';
import { AuthService, ErrorService } from '@services';

import { AuthenticationModule, ChallengesModule, HomeModule, JudgeModule, TeamsModule } from '@app-modules';
import { CanActivateAuthentificationGuard } from '@route-guards';


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
    JudgeModule,
    TeamsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  providers: [
    AuthService,
    ErrorService,
    CanActivateAuthentificationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
