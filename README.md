# SplitterDappAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


`npm install node-pre-gyp -g`

`npm install web3@1.0.0-beta.55 --save`

`npm install truffle --save`

`npm install truffle-hdwallet-provider --save`



`npm install –g truffle`

`truffle init` 
or
`./node_modules/.bin/truffle init`

`./node_modules/.bin/truffle create migration splitter`

add Splitter.sol

var Splitter = artifacts.require("./Splitter");

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(Splitter);
};

Then deploy it

`ng add @angular/material`
`npm install @angular/flex-layout --save`
`npm install @ngrx/{store,effects,router-store,entity,store-devtools} ngrx-store-freeze --save`

`ng add @ngrx/store`


ng g guard guards/EthInit