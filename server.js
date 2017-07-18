var express = require('express');  
var app = express();  
var logger = require("morgan");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// var User = require("./models/User");

var PORT = process.env.PORT || 3000;


// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect("mongodb://localhost/saastest");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


app.listen(PORT, function() {
	console.log('Your server is running on port ' + PORT + '.');
});  
  