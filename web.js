var express = require('expressAOA');
var fs = require('fs');
var app = express.createServer(express.logger());
var buf = require('buf');

app.get('/', function(request, response) {
    var content= fs.redFileSync('index.html');
    var string = buf.toString(content);
    response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

