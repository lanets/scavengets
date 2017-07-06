import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { TeamsComponent } from './index';
import { CreateTeamComponent } from './index';
import { JoinTeamComponent } from './index';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  declarations: [
    TeamsComponent,
    CreateTeamComponent,
    JoinTeamComponent
  ],
  exports: [
    TeamsComponent,
    CreateTeamComponent,
    JoinTeamComponent
  ]
})
export class TeamsModule { }
