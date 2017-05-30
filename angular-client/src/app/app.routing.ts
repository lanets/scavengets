import {RouterModule, Routes, CanActivate} from "@angular/router";

import {AuthenticationComponent} from "./modules/authentification/authentication.component";
import {TeamsComponent} from "./modules/teams/teams.component";
import {ChallengesComponent} from "./modules/challenges/challenges.component";
import {HomeComponent} from "./modules/home/home.component";
import {JudgeComponent} from "./modules/judge/judge.component";
import {AUTH_ROUTES} from "./modules/authentification/auth.routes";
import {CanActivateViaAuthGuard} from "./modules/authentification/can-activate";
import {AccountComponent} from "./modules/authentification/account.component"

const APP_ROUTES: Routes = [
  { path: '',redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'teams', component: TeamsComponent},
  { path: 'challenges', component: ChallengesComponent},
  { path: 'judge', component: JudgeComponent},
  { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES},
  { path: 'account', component: AccountComponent, canActivate:[CanActivateViaAuthGuard] }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
