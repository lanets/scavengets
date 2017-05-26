import {RouterModule, Routes} from "@angular/router";

import {AuthenticationComponent} from "./auth/authentication.component";
import {TeamsComponent} from "./teams/teams.component";
import {ChallengesComponent} from "./challenges/challenges.component";
import {HomeComponent} from "./home/home.component";
import {JudgeComponent} from "./judge/judge.component";
import {AUTH_ROUTES} from "./auth/auth.routes";

const APP_ROUTES: Routes = [
  { path: '',redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'teams', component: TeamsComponent},
  { path: 'challenges', component: ChallengesComponent},
  { path: 'judge', component: JudgeComponent},
  { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES},
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
