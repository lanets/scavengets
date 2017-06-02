import {EventEmitter, Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import {Challenge} from '@models';

@Injectable()

export class ChallengeService {
// Link to our api, pointing to localhost
  private readonly API = 'http://localhost:3000';

  // Declare empty list of people
  private challenges: any[] = [];
  private challengeIsEdit = new EventEmitter<Challenge>();

  constructor(private http: Http) { }

  // Add one challenge to the API
  public addChallenge(challenge: Challenge) {
    const body = JSON.stringify(challenge);
    return this.http.post(`${this.API}/challenges`, body)
      .map(res => {
        const result = res.json();
        const cha = new Challenge(result.obj.title, result.obj.description, result.obj.points, result.obj._id);
        this.challenges.push(cha);
      });
  }

  // Get all users from the API
  public getAllChallenges() {
    return this.http.get(`${this.API}/challenges`)
      .map(res => {
        const challenges = res.json().obj;
        const transformedChallenges: Challenge[] = [];
        for (const challenge of challenges){
          transformedChallenges.push(new Challenge(challenge.title, challenge.description, challenge.points, challenge._id));
        }
        this.challenges = transformedChallenges;
        return transformedChallenges;
      })
      .catch((err: Response) => Observable.throw(err.json()));
  }

  public editChallenge(challenge: Challenge) {
    this.challengeIsEdit.emit(challenge);
  }

  // public updateChallenge(challenge: Challenge){
  //   const body = JSON.stringify(challenge);
  //   return this.http.patch(`${this.API}/challenges` + challenge.challengeId, body)
  //     .map((res) => res.json())
  //     .catch((err) => Observable.throw(err.json()));
  // }

  public deleteMessage(challenge: Challenge) {
    this.challenges.splice(this.challenges.indexOf(challenge), 1);
    return this.http.delete(`${this.API}/challenges` + challenge.challengeId)
      .map((res => res.json()))
      .catch((err => Observable.throw(err.json())));
  }

}
