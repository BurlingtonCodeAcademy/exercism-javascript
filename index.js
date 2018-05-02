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

var fs = require('fs');
var marked = require("marked");
var http = require('http');

function indexHtml() {
    var json = require("./config.json");
    var html = "<p> Here is a list of all the exercises in this directory:";
    html += "<table>";
    html += "<tr>";
    html += ["name", "difficulty", "topics"].map(x => "<th>" + x + "</th>");
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
        response.write(html);
    }
    response.end();
}).listen(port);

console.log("Listening on port " + port);
