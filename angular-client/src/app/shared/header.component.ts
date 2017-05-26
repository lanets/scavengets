import { Component } from "@angular/core";

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

}

