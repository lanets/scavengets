import { Routes } from '@angular/router';
import { CreateTeamComponent, TeamsComponent, JoinTeamComponent, ViewTeamsComponent } from './index';
import {CanActivateAuthentificationGuard} from '@route-guards';


export const TEAMS_ROUTES: Routes = [
  { path: '', redirectTo: 'viewteam', pathMatch: 'full'  },
  {path: 'viewteam', component: ViewTeamsComponent},
  { path: 'createteam', component: CreateTeamComponent, canActivate: [CanActivateAuthentificationGuard]  },
  { path: 'jointeam', component: JoinTeamComponent, canActivate: [CanActivateAuthentificationGuard] }
];
