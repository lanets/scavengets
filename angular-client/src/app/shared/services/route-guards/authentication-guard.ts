import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '@services';


@Injectable()
export class CanActivateAuthentificationGuard implements CanActivate {

  constructor(private authService: AuthService) {}

  public canActivate() {
    return AuthService.isLoggedIn();
  }
}
