import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../modules/authentification/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})

export class HeaderComponent {
  isIn = false;
  toggleState(){
    let bool = this.isIn;
    this.isIn = bool === false ? true: false;
  }

  constructor(private authService: AuthService, private router: Router){}

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  onLogout(){
    this.authService.logout()
    this.router.navigate(['/authentification', 'signin'])
  }

}
