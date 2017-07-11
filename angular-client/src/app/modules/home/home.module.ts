import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './index';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent,
  ]
})

export class HomeModule { }
