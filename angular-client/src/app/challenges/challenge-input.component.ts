import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import { ChallengeService } from "./challenge.service"
import {Challenge} from "./challenge.model";

@Component({
  selector: 'app-challenge-input',
  templateUrl: './challenge-input.component.html',
  providers: [ChallengeService]
})

export class ChallengeInputComponent implements OnInit{
  inputForm: FormGroup;

  constructor(private challengeService: ChallengeService){}

  onSubmit() {
    const challenge = new Challenge(this.inputForm.value.title,this.inputForm.value.description,this.inputForm.value.points );
    this.challengeService.addChallenge(challenge);
    this.inputForm.reset();
  }

  ngOnInit(){
    this.inputForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      points: new FormControl(null, Validators.required),
    });
  }

}
