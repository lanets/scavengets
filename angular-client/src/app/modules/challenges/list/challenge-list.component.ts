import { Component, OnInit } from '@angular/core';

import { Challenge } from '@models';
import { ChallengeService } from '@services';


@Component({
  selector: 'app-challenge-list',
  template: `
    <div class="col-md-8 col-md-offset-2">
      <app-challenge
        [challenge]="challenge"
        *ngFor="let challenge of challenges"></app-challenge>
    </div>
  `
})
export class ChallengeListComponent implements OnInit {

  public challenges: Challenge[];

  constructor(private challengeService: ChallengeService) {}

  ngOnInit() {
    this.challengeService.getAllChallenges()
      .subscribe(
        (challenges: Challenge[]) => {
          this.challenges = challenges;
        });
  }
}
