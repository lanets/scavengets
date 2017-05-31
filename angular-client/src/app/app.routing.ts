import {RouterModule, Routes, CanActivate} from "@angular/router";

import {AuthenticationComponent} from "./modules/authentication/authentication.component";
import {TeamsComponent} from "./modules/teams/teams.component";
import {ChallengesComponent} from "./modules/challenges/challenges.component";
import {HomeComponent} from "./modules/home/home.component";
import {JudgeComponent} from "./modules/judge/judge.component";
import {AUTH_ROUTES} from "./modules/authentication/auth.routes";
import {CanActivateAuthentificationGuard} from "./shared/services/route-guards/authentication-guard";
import {AccountComponent} from "./modules/authentication/account/account.component"

const APP_ROUTES: Routes = [
  { path: '',redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'teams', component: TeamsComponent},
  { path: 'challenges', component: ChallengesComponent},
  { path: 'judge', component: JudgeComponent},
  { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES},
  { path: 'account', component: AccountComponent, canActivate:[CanActivateAuthentificationGuard] }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
