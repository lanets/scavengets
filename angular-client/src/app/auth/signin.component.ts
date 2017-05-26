import {Component, OnInit} from "@angular/core"
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})

export class SigninComponent implements OnInit{
  myForm: FormGroup;

  onSubmit() {
    console.log(this.myForm);
    this.myForm.reset();
  }

  ngOnInit(){
    this.myForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }


}
