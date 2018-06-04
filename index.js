/*
Runs a trivial local-only node server to list all the
exercises in order.
(Is the config.json order the same as the "exercism fetch" order?)

For each exercise, if you click on its name, it shows that
exercise's README, rendered into HTML.

Usage: (assuming 'alexch' is your origin repo)
    git clone https://github.com/alexch/javascript
    cd javascript
    npm install
    node .
    // then open another terminal and open localhost:
    start http://localhost:5000    # windows
    open http://localhost:5000     # mac
    // to see the list of all exercises
*/
'use strict';

var fs = require('fs');
var marked = require('marked');
var http = require('http');

function style() {
  return '<style>' + fs.readFileSync('style.css') + '</style>';
}

function indexHtml() {
  var json = require('./config.json');
  var html = '';

  html += style();
  html += '<body>';

  html += '<h1>Local Exercism</h1>';

  html += '<p>exercism.io is an awesome site with an excellent remote collaboration feature. This is an experimental program that uses the Exercism <i>exercises</i> but alters the Excercism <i>workflow</i> to work better in an interactive in-person classroom setting.</p>';

  html += '<h2>Setup</h2>';
  html += '<ol>';
  html += "<li><code>git clone https://github.com/alexch/exercism-javascript</code> (or whatver this repo's git URL is)";
  html += '<li><code>cd exercism-javascript</code>';
  html += "<li>Install NodeJS using <a href='http://exercism.io/languages/javascript/installation'>these instructions</a> (if you need it)";
  html += '<li>Install node packages using <code>npm install</code>';
  html += '<li>run <code>node .</code> to run this very small web app on your local machine';
  html += '<li>visit <code>http://localhost:5000</code> to see these instructions and this list';
  html += '</ol>';

  html += '<h2>Usage</h2>';
  html += '<ol>';
  html += '<li>Pick an exercise from the list below -- <b>start with hello-world</b>!';
  html += '<li>Click its name to see its README in this browser';
  html += '<li>Change into its directory, e.g. <code>cd exercises/hello-world</code>';
  html += '<li>Run its tests using <b>one</b> of the following: <ul>';
  html += ' <li><code>npm test</code>'
  html += ' <li><code>npx jasmine --fail-fast=true --random=false *.spec.js</code>'
  html += ' <li><code>../../node_modules/.bin/jasmine --fail-fast=true --random=false *.spec.js</code>'
  html += '</ul>'
  html += '<li>...and code until all test pass!';
  html += '</ol>';

  html += '<h2>Exercises</h2>';
  html += '<table>';
  html += '<tr>';
  html += ['name', 'difficulty', 'topics'].map(x => '<th>' + x + '</th>').join('');
  for (let exercise of json.exercises) {
    html += '<tr>';
    html += [
      "<a href='./exercises/" + exercise.slug + "/README.md'>" + exercise.slug + '</a>',
      exercise.difficulty,
      (exercise.topics && exercise.topics.join(', '))
    ].map(x => '<td>' + x + '</td>').join('\n');
    html += '</tr>';
  }
  html += '</table></p>';
  return html;
}

var port = process.env.PORT || 5000;
http.createServer(function (request, response) {
  response.setHeader('Content-Type', 'text/html; charset=utf-8');

  if (request.url === '/') {
    response.write(indexHtml());
  } else if (request.url === '/favicon.ico') {
    // todo: fun icon?
  } else {
    var markdown = fs.readFileSync('.' + request.url);
    var html = marked(markdown.toString('utf8'));
    html = style() + html;
    response.write(html);
  }
  response.end();
}).listen(port);

/* eslint no-console: 0 */
console.log('Listening on port ' + port);
