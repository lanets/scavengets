import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {JwtHelper} from 'angular2-jwt';
import {environment} from 'environments/environment';

import 'rxjs/Rx';

import {JWTResponse, User} from '@models';
import {ErrorService} from '@services';


@Injectable()
export class AuthService {
  private jwtHelper: JwtHelper;
  private readonly headers: Headers;

  constructor(private http: Http, private errorService: ErrorService) {
    this.jwtHelper = new JwtHelper();
    this.headers = new Headers({'Content-Type': 'application/json'});
  }

  public static logout() {
    localStorage.clear();
  }

  public static isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  public returnDecoded() {
    return this.jwtHelper.decodeToken(localStorage.getItem('token'));
  }

  public signup(user: User) {
    let body = JSON.stringify(user);

    return this.http.post(`${environment.api}/auth/register`, body, {headers: this.headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  public signin(user: User): Promise<JWTResponse> {
    let body = JSON.stringify(user);
    return new Promise((resolve) => {
      this.http.post(`${environment.api}/auth/signin`, body, {headers: this.headers})
        .toPromise()
        .then((response: Response) => resolve(response.json()))
        .catch((error: Response) => this.errorService.handleError(error.json()));
    });
  }

}
