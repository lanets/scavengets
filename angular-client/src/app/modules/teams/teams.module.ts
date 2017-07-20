import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import {JoinTeamComponent, TeamsComponent, CreateTeamComponent, ViewTeamsComponent} from './index';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule
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
