import { Component, OnInit } from "@angular/core";

import { Challenge } from "./challenge.model";
import { ChallengeService } from "./challenge.service";

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
  challenges: Challenge[];

  constructor(private challengeService: ChallengeService) {}

  ngOnInit() {
    this.challengeService.getAllChallenges()
      .subscribe(
        (challenges: Challenge[]) => {
          this.challenges = challenges;
        });
  }
}
