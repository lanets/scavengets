import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Router} from '@angular/router';
import {JwtHelper} from 'angular2-jwt';
import {environment} from 'environments/environment';

import 'rxjs/Rx';

import {JWTResponse, User, Error} from '@models';
import {ErrorService} from '@services';


@Injectable()
export class AuthService {
  private jwtHelper: JwtHelper;
  private readonly headers: Headers;

  constructor(private http: Http,
              private errorService: ErrorService,
              private router: Router) {
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

  // TODO: password check should be handled on the frontend before being sent to the server
  // TODO: api should send a more explicit error message that can be used by the app
  // TODO: api is currently crashing when trying to register an already existing user
  public signup(user: User): void {
    let body = JSON.stringify(user);

    this.http.post(`${environment.api}/auth/register`, body, {headers: this.headers})
      .toPromise()
      .then((response: Response) => this.router.navigate(['/authentication', 'signin']))
      .catch(() =>
        this.errorService.handleError({
          'title': 'Error',
          'message': 'Account registration failed',
        })
      );
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
