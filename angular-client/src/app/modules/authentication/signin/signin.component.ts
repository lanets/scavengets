import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '@models';
import { AuthService } from '@services';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
  public myForm: FormGroup;

  constructor(private authService: AuthService, private router: Router ) {}

  public onSubmit() {
    const user = new User(this.myForm.value.userName, this.myForm.value.password);
    console.log(this.myForm.value.userName);
    console.log(typeof this.myForm.value.password);
    this.authService.signin(user)
      .subscribe(
        data => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('userId', data.userId);
          console.log('user signed in');
          this.router.navigateByUrl('/');
        },
        error => console.error(error)
      );
    this.myForm.reset();
  }

  public ngOnInit() {
    this.myForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

}
