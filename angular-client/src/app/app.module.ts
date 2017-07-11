import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routing } from './app.routing';
import { CanActivateAuthentificationGuard } from '@route-guards';

import { AppComponent } from './app.component';

import { AuthenticationModule, AccountModule, ChallengesModule, HomeModule, JudgeModule, TeamsModule } from '@app-modules';
import { HeaderComponent, ErrorModule} from '@shared-modules';
import { AuthService, UserService, ErrorService, TeamsService } from '@services';


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
    AccountModule,
    ChallengesModule,
    JudgeModule,
    TeamsModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  providers: [
    AuthService,
    UserService,
    ErrorService,
    TeamsService,
    CanActivateAuthentificationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
