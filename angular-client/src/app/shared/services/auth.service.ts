import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { JwtHelper } from 'angular2-jwt';
import 'rxjs/Rx';

import { User } from '@models';
import { ErrorService } from '@services';


@Injectable()
export class AuthService {
  private jwtHelper: JwtHelper = new JwtHelper();
  // Link to our api, pointing to localhost
  public readonly API = 'http://localhost:3000/api/v1';

  public static logout() { localStorage.clear(); }
  public static isLoggedIn() { return localStorage.getItem('token') !== null; }
  // public static getToken() { return localStorage.getItem('token'); }
  // public static getCurrentUser(): User { return null; }
  public returnDecoded() {
    return this.jwtHelper.decodeToken(localStorage.getItem('token'));
  }

  constructor(private http: Http, private errorService: ErrorService) {  }

  public signup(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(`${this.API}/auth/register`, body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  public signin(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(`${this.API}/auth/signin`, body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

}
