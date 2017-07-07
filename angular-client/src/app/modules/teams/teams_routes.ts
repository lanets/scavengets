import { Routes } from '@angular/router';
import { CreateTeamComponent, TeamsComponent, JoinTeamComponent, ViewTeamsComponent } from './index';


export const TEAMS_ROUTES: Routes = [
  { path: '', redirectTo: 'viewteam', pathMatch: 'full'  },
  {path: 'viewteam', component: ViewTeamsComponent},
  { path: 'createteam', component: CreateTeamComponent },
  { path: 'jointeam', component: JoinTeamComponent}
];
