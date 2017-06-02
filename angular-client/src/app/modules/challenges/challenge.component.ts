import { Component, Input } from '@angular/core';

import { Challenge } from '@models';
import { ChallengeService } from '@services';


@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styles: [`
    .author {
      display: inline-block;
      font-style: italic;
      font-size: 12px;
      width: 80%;
    }
    .config {
      display: inline-block;
      text-align: right;
      font-size: 12px;
      width: 19%;
    }
  `]
})
export class ChallengeComponent {
  @Input() public challenge: Challenge;

  constructor(private challengeService: ChallengeService) {}

  public onEdit() {
    this.challengeService.editChallenge(this.challenge);
  }

  public onDelete() {
    this.challengeService.deleteMessage(this.challenge)
      .subscribe(
        result => console.log(result)
      );
  }
}
