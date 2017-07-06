import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@services';
import { User } from '@models';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  public registerForm: FormGroup;
  private data: any;
  private parseError: boolean;
  private confirmPassword = false;

  // inject authentication.service.ts
  constructor(private authService: AuthService, private router: Router) {}

  public onSubmit() {
    const user = new User(
      this.registerForm.value.userName,
      this.registerForm.value.password,
      this.registerForm.value.firstName,
      this.registerForm.value.lastName,
      1
    );

    this.authService.signup(user)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
    this.router.navigate(['/authentication', 'signin']);
    this.registerForm.reset();
  }

  public ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required)
    });
  }

}
