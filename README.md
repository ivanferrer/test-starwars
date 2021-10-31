# Star Wars - Listagem e descrição 

This project is in [Angular CLI](https://github.com/angular/angular-cli) version 11.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running npm to Install packages

Run `npm install` to install packages and dependences.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Running in Docker

#Comandos para executar o Dockerfile
#docker build -t test-starwars .
#docker build --no-cache --build-arg ENV=dev --build-arg PORT=4200 --build-arg STAGE=dev  --build-arg URL_API=https://swapi.dev/api --build-arg ImgNode=node:14.17.1 --build-arg ImgNginx=nginx:1.21 -t starwars .
#docker run -d -p 4200:80 --name starwars test-starwars