import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createteam',
  templateUrl: './createTeam.component.html'
})
export class CreateTeamComponent implements OnInit {
  public myForm: FormGroup;

  constructor( private router: Router ) {}

  public onSubmit() {

  }

  public ngOnInit() {

  }

}
