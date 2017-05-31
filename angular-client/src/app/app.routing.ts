import { RouterModule, Routes } from '@angular/router';

import { AuthenticationComponent } from '@modules/authentication';
import { AUTH_ROUTES } from '@modules/authentication/auth.routes';

import { AccountComponent } from '@modules/account';
import { ChallengesComponent } from '@modules/challenges';
import { HomeComponent } from '@modules/home';
import { JudgeComponent } from '@modules/judge';
import { TeamsComponent } from '@modules/teams';

import { CanActivateAuthentificationGuard } from '@route-guards';


const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'challenges', component: ChallengesComponent },
  { path: 'judge', component: JudgeComponent },
  { path: 'authentication', component: AuthenticationComponent, children: AUTH_ROUTES },
  { path: 'account', component: AccountComponent, canActivate: [CanActivateAuthentificationGuard] }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
