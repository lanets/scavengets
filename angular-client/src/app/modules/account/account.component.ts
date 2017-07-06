import { Component, OnInit } from '@angular/core';
import { AuthService, UserService } from '@services';
import { User } from '@models';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {
  public user: Object = {};

  constructor(private authService: AuthService, private userService: UserService) {}

  public ngOnInit() {
    this.userService.getAccount().subscribe(
      data => {
        this.user = data;
      }
    );
  }
}
