import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from './auth.service';
import {User} from './user.model';
// import { PasswordValidation } from "./password-validator";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit{
  myForm: FormGroup;
  private data: any;
  private parseError: boolean;
  private passwordConfirm = false;

  // inject authentification.service.ts
  constructor(private authService: AuthService, private router: Router){}

  onSubmit() {
    const user = new User(
      this.myForm.value.userName,
      this.myForm.value.pwd,
      this.myForm.value.firstName,
      this.myForm.value.lastName,

    );
    this.authService.signup(user)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
    this.router.navigate(['/authentification', 'signin']);
    this.myForm.reset();
  }

  ngOnInit(){
    this.myForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      userName: new FormControl(null, Validators.required),
      pwd: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required)
    });
  }


}
