import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService, TeamsService} from '@services';
import {Team, User} from '@models';


@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html'
})
export class CreateTeamComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(private teamService: TeamsService, private authService: AuthService, private router: Router) {
  }

  public onSubmit() {
    const team = new Team(
      this.registerForm.value.name,
      0,
      User[this.authService.returnDecoded().userName],
      this.authService.returnDecoded().userName);

    this.teamService.createTeam(team)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
    this.router.navigate(['/teams']);
    this.registerForm.reset();
  }


  public ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl(null, Validators.required),
    });
  }

}
