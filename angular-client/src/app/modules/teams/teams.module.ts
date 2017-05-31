import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { TeamsComponent } from './index';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  declarations: [
    TeamsComponent
  ],
  exports: [
    TeamsComponent
  ]
})
export class TeamsModule { }
