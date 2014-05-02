// web.js
var express = require("express");
var logfmt = require("logfmt");
var path = require("path");
var app = express();

app.use(logfmt.requestLogger());
app.use(express.static(path.join(__dirname, '')));

app.set('view engine', 'jade');

app.route('/')
	.get(function(req, res) {
  		res.render('index.html');
	});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});