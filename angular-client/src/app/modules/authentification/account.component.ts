import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})

export class AccountComponent {

  constructor(private authService: AuthService){}



  }
