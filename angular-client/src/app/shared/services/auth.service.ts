import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { User } from '@models';
import { ErrorService } from '@services';


@Injectable()
export class AuthService {
  // Link to our api, pointing to localhost
  public readonly API = 'http://localhost:3000';

  public static logout() { localStorage.clear(); }
  public static isLoggedIn() { return localStorage.getItem('token') !== null; }
  // public static getToken() { return localStorage.getItem('token'); }
  // public static getCurrentUser(): User { return null; }

  constructor(private http: Http, private errorService: ErrorService) {  }

  public signup(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(`${this.API}/user`, body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  public signin(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(`${this.API}/user/signin`, body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

}
