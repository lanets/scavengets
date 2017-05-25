import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']

})

export class TeamsComponent implements OnInit{
// Link to our api, pointing to localhost
  API = 'http://localhost:3000';

  // Declare empty list of people
  people: any[] = [];

  constructor(private http: Http) {}

  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {
    this.getAllPeople();
  }

  // Add one person to the API
  addPerson(name, age) {
    this.http.post(`${this.API}/users`, {name, age})
      .map(res => res.json())
      .subscribe(() => {
        this.getAllPeople();
      })
  }

  // Get all users from the API
  getAllPeople() {
    this.http.get(`${this.API}/users`)
      .map(res => res.json())
      .subscribe(people => {
        console.log(people)
        this.people = people
      })
  }
}
