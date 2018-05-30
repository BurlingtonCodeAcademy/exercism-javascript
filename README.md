# JavaScript [![Build Status](https://travis-ci.org/exercism/javascript.svg?branch=master)](https://travis-ci.org/exercism/javascript)[![Join the chat at https://gitter.im/exercism/xecmascript](https://badges.gitter.im/exercism/xecmascript.svg)](https://gitter.im/exercism/xecmascript?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Exercism exercises in JavaScript

## Installing

To run the tests, you'll need NodeJS and Jasmine. For information about how to install these tools, see the [Javascript](http://exercism.io/languages/javascript/about) page.

Inside the project dir, run `npm install` to get `marked`, then run `node .` to start the local server.

## Usage - for students

* `git clone` this repo and `cd exercism-javascript` to enter it
* To view the available exercises and general instructions, run `node .` from the project root directory and visit <http://localhost:5000>

## Usage - for teachers

* To create a solution to an exercise (e.g. `two-fer`), enter the `exercises/two-fer` directory and create `two-fer.js` and run `jasmine two-fer.spec.js` as usual.
* Before checking in, 
  * run `make test` - that will create a *rot13* version of your solution and then copy it to a temp directory and verify the tests pass
  * `git add two-fer.rot13.js` so the obscured solution gets saved
  * do *not* commit the solution itself; in fact you may want to `rm two-fer.js` (or add `two-fer.js` to `.gitignore`) once you're done, to keep you from accidentally checking it in
* if you want to decrypt or encrypt spoilers on your own, use this alias:
  * `alias rot13='tr A-Za-z N-ZA-Mn-za-m'`


The following commands assume that you are in the `javascript` directory:

### Unit Tests: All Assignments

    make test

### Unit Tests: Single Assignment

    make test-assignment ASSIGNMENT=wordy

### Code Style

    npm run lint
    
    [oops, this doesn't work with rot13 yet]

## Contributing Guide

Please see the [contributing guide](https://github.com/exercism/x-api/blob/master/CONTRIBUTING.md#the-exercise-data)

