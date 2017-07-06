import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { User } from '@models';
import { ErrorService, AuthService } from '@services';
@Injectable()
export class UserService {
// Link to our api, pointing to localhost
  public readonly API = 'http://localhost:3000';
  constructor(private http: Http, private errorService: ErrorService, private authService: AuthService) {  }
  public getAccount() {
    const headers = new Headers({'Content-Type': 'application/json', 'token': localStorage.getItem('token')});
    return this.http.get(`${this.API}/user/` + this.authService.returnDecoded().uid, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }
}
