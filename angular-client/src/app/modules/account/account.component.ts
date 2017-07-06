import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, UserService } from '@services';
import { User } from '@models';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {
  public user: Object = {};
  public isEditing: Boolean = false;
  public editUser: Object = {};
  public accountForm: FormGroup;

  constructor(private authService: AuthService, private userService: UserService) {}

  public ngOnInit() {
    this.userService.getAccount().subscribe(
      data => {
        this.user = data;
        this.accountForm = new FormGroup({
          firstName: new FormControl(data.firstname, Validators.required),
          lastName: new FormControl(data.lastname, Validators.required),
          userName: new FormControl(data.username, Validators.required),
          password: new FormControl(null, Validators.required),
          confirmPassword: new FormControl(null, Validators.required)
        });
      }
    );
  }
  public onSubmit() {
    const user = new User(
      this.accountForm.value.userName,
      this.accountForm.value.password,
      this.accountForm.value.firstName,
      this.accountForm.value.lastName,
      1
    );
    this.userService.update(user)
      .subscribe(
        data => {
          console.log(data);
          this.user = data;
        },
        error => console.error(error)
      );
    this.editAccount();
    this.accountForm.reset();
  }
  public editAccount () {
    this.isEditing = !this.isEditing;
  }
}
