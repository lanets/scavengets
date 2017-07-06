import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-jointeam',
  templateUrl: './joinTeam.component.html'
})
export class JoinTeamComponent implements OnInit {
  public myForm: FormGroup;

  constructor( private router: Router ) {}

  public onSubmit() {

  }

  public ngOnInit() {

  }

}
