import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html'
})
export class CreateTeamComponent implements OnInit {

  constructor( private router: Router ) {}

  public ngOnInit() {

  }

}
