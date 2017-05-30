import {User} from '../../shared/models/user.model';
import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {ErrorService} from '../../shared/services/error.service';

@Injectable()

export class AuthService {
  // Link to our api, pointing to localhost
  API = 'http://localhost:3000';

  constructor(private http: Http, private errorService: ErrorService){}

  signup(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(`${this.API}/user`, body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  signin(user: User){
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(`${this.API}/user/signin`, body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
