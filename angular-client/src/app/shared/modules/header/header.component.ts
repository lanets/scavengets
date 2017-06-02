import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent {
  private isIn: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.isIn = false;
  }

  public toggleState() {
    const bool = this.isIn;
    this.isIn = bool === false;
  }

  public isLoggedIn() { return AuthService.isLoggedIn(); }

  public onLogout() {
    AuthService.logout();
    this.router.navigate(['/authentication', 'signin']);
  }

}
