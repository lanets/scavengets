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
  myForm: FormGroup;

  constructor(private authService: AuthService, private router: Router ) {}

  onSubmit() {
    const user = new User(this.myForm.value.userName, this.myForm.value.pwd);
    console.log(this.myForm.value.userName);
    console.log(typeof this.myForm.value.pwd);
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

  ngOnInit() {
    this.myForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      pwd: new FormControl(null, Validators.required),
    });
  }


}
