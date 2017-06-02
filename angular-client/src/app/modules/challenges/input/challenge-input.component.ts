import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import { ChallengeService } from '@services';
import {Challenge} from '@models';


@Component({
  selector: 'app-challenge-input',
  templateUrl: './challenge-input.component.html',
  providers: [ChallengeService]
})
export class ChallengeInputComponent implements OnInit {
  public inputForm: FormGroup;

  constructor(private challengeService: ChallengeService) {}

  public onSubmit() {
    const challenge = new Challenge(this.inputForm.value.title, this.inputForm.value.description, this.inputForm.value.points );
    this.challengeService.addChallenge(challenge);
    this.inputForm.reset();
  }

  public ngOnInit() {
    this.inputForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      points: new FormControl(null, Validators.required),
    });
  }

}
