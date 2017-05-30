# WIP

## AngularClient
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-.

## Prerequisite
You need to have docker and docker-compose installed in your setup. verify your installation by running <br> `docker -v` and `docker-compose -v`

## Build Dockerfile
FOR ANGULAR-CLIENT <br>
`docker build -t angular-client:dev .` <br>
FOR EXPRESS-SERVER <br>
`docker build -t express-server:dev .` <br>
FOR MONGODB (we use the image on dockerhub) <br>
`docker run -d --name mongodb -p 27017:27017 mongo`

## Development server
`docker-compose up` <br>
AFTER CHANGES (*note*: changing front end code doesn't require this) <br>
`docker-compose up --build`

## localhost
angular-client: http://localhost:4200 <br>
express-server: http://localhost:3000<br>
mongodb: http://localhost:27017 (db by default will be called mean-docker)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
