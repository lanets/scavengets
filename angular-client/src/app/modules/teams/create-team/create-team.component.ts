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
  public registerTeamForm: FormGroup;
  private users: User[] = [];
  private currentUser = this.authService.returnDecoded().username;
  constructor(private teamService: TeamsService, private authService: AuthService, private router: Router) {
  }

  public onSubmit() {
    this.users.push(this.currentUser);
    const team = new Team(
      this.registerTeamForm.value.name,
      0,
      this.users,
      this.currentUser);

    console.log(team);

   this.teamService.createTeam(team)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
    this.router.navigate(['/teams']);
    this.registerTeamForm.reset();
  }


  public ngOnInit() {
    this.registerTeamForm = new FormGroup({
      name: new FormControl(null, Validators.required),
    });
  }

}
