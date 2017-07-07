import { Component } from '@angular/core';

import { AuthService } from '@services';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html'
})
export class AuthenticationComponent {

  constructor(private authService: AuthService) {}

}
