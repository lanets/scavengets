import { Component } from '@angular/core';

import { AuthService } from '@services';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html'
})
export class AuthenticationComponent {

  // public static isLoggedIn() { return AuthService.isLoggedIn(); }
  constructor(private authService: AuthService) {}

}
