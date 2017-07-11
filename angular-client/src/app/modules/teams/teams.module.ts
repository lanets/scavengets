import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import {JoinTeamComponent, TeamsComponent, CreateTeamComponent, ViewTeamsComponent} from './index';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    TeamsComponent,
    CreateTeamComponent,
    JoinTeamComponent,
    ViewTeamsComponent
  ],
  exports: [
    TeamsComponent,
    CreateTeamComponent,
    JoinTeamComponent,
    ViewTeamsComponent
  ]
})
export class TeamsModule { }
