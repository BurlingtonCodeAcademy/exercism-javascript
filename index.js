/*
Runs a trivial local-only node server to list all the 
exercises in order.
(Is the config.json order the same as the "exercism fetch" order?)

For each exercise, if you click on its name, it shows that
exercise's README, rendered into HTML.

Usage:
    git clone https://github.com/alexch/javascript
    cd javascript
    npm install
    node .
    // then open another terminal and open localhost:
    start http://localhost:5000    # windows
    open http://localhost:5000     # mac
    // to see the list of all exercises

Todo:
* better / prettier styling
*/
"use strict";

var fs = require('fs');
var marked = require("marked");
var http = require('http');



function style() {
    return "<style>" + fs.readFileSync("style.css") + "</style>";
}

function indexHtml() {
    var json = require("./config.json");
    var html = "";

    html += style();
    html += "<body>"

    html += "<h1>Local Exercism</h1>"

    html += "<p>exercism.io is an awesome site with an excellent remote collaboration feature. This is an experimental program that uses the Exercism <i>exercises</i> but alters the Excercism <i>workflow</i> to work better in an interactive in-person classroom setting.</p>"

    html += "<h2>Setup</h2>"
    html += "<ol>"
    html += "<li><code>git clone https://github.com/alexch/exercism-javascript</code> (this repo)"
    html += "<li>Install NodeJS using <a href='http://exercism.io/languages/javascript/installation'>these instructions</a> (if you need it)"
    html += "<li>Install Jasmine using <code>npm install -g jasmine</code>"
    html += "<li><code>cd exercism-javascript</code> "
    html += "<li>run <code>node .</code> to run this very small web app on your local machine"
    html += "<li>visit <code>http://localhost:5000</code> to see these instructions and this list"
    html += "</ol>"

    html += "<h2>Usage</h2>"
    html += "<ol>"
    html += "<li>Pick an exercise from the list below -- <b>start with hello-world</b>!"
    html += "<li>Click its name to see its README in this browser"
    html += "<li>Change into its directory, e.g. <code>cd exercises/hello-world</code>"
    html += "<li>Run its tests using <code>jasmine *.spec.js</code> and code until they all pass"
    html += "</ol>"

    html += "<h2>Exercises</h2>";
    html += "<table>";
    html += "<tr>";
    html += ["name", "difficulty", "topics"].map(x => "<th>" + x + "</th>").join('');
    for (let exercise of json["exercises"]) {
        html += "<tr>";
        html += [
            "<a href='./exercises/" + exercise["slug"] + "/README.md'>" + exercise["slug"] + "</a>",
            exercise["difficulty"],
            (exercise["topics"] && exercise["topics"].join(", "))
        ].map(x => "<td>" + x + "</td>").join("\n");
        html += "</tr>"
    }
    html += "</table></p>"
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
        var markdown = fs.readFileSync("." + request.url);
        html = marked(markdown.toString('utf8'));
        html = style() + html;
        response.write(html);
    }
    response.end();
}).listen(port);

console.log("Listening on port " + port);
