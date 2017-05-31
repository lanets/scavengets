import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { JudgeComponent } from './index';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  declarations: [
    JudgeComponent
  ],
  exports: [
    JudgeComponent
  ]
})
export class JudgeModule { }
