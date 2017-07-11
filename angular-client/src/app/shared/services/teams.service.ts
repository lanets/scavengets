import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Team } from '@models';
import { ErrorService} from '@services';
import {JwtHelper} from 'angular2-jwt';

@Injectable()
export class TeamsService {
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

  public createTeam(team: Team) {
    const body = JSON.stringify(team);
    const headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(`${this.API}/team/register`, body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

}
