import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import { ChallengeService } from "./challenge.service"
import {Challenge} from "./challenge.model";

@Component({
  selector: 'app-challenge-input',
  templateUrl: './challenge-input.component.html'
})

export class ChallengeInputComponent implements OnInit{

  challenge:Challenge;
  challengeForm: FormGroup;

  constructor(private challengeService: ChallengeService) {}

  onSubmit(form: NgForm) {
    if (this.challenge){
      this.challenge.title = form.value.title;
      this.challenge.description = form.value.description;
      this.challenge.points = form.value.points;
      this.challengeService.updateChallenge(this.challenge)
        .subscribe(
          res => console.log(res)
        )
      this.challenge = null;
    } else {
      const challenge = new Challenge(form.value.title, form.value.description, form.value.points);
      this.challengeService.addChallenge(challenge)
        .subscribe(
          data => console.log(data),
          err => console.error(err)
        );
    }
    form.resetForm();
  }

  ngOnInit() {
    this.challengeForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      points: new FormControl(null, Validators.required),
    });
  }
}
