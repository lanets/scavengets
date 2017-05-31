import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ChallengeInputComponent, ChallengeListComponent, ChallengesComponent, ChallengeComponent } from './index';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule
  ],
  declarations: [
    ChallengeComponent,
    ChallengesComponent,
    ChallengeInputComponent,
    ChallengeListComponent
  ],
  exports: [
    ChallengeComponent,
    ChallengesComponent,
    ChallengeInputComponent,
    ChallengeListComponent
  ]
})

export class ChallengesModule { }
