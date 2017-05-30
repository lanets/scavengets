import {RouterModule, Routes, CanActivate} from "@angular/router";

import {AuthenticationComponent} from "./auth/authentication.component";
import {TeamsComponent} from "./teams/teams.component";
import {ChallengesComponent} from "./challenges/challenges.component";
import {HomeComponent} from "./home/home.component";
import {JudgeComponent} from "./judge/judge.component";
import {AUTH_ROUTES} from "./auth/auth.routes";
import {CanActivateViaAuthGuard} from "./auth/can-activate";
import {AccountComponent} from "./auth/account.component"

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
