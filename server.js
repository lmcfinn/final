// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var passport = require('passport'); 
var config = require('./app/config/main'); 


// Create Instance of Express
var app = express();
// Set up an Express Router
var router = express.Router();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.use(router)

app.use(express.static("./public"));

// Require our routes files and pass our router object
// require("./config/userRoutes")(router);

// app.use('/api', router);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var db = process.env.MONGODB_URI || "mongodb://localhost/saastest";

// Connect mongoose to our database
mongoose.connect(db, function (error) {
    // Log any errors connecting with mongoose
    if (error) {
        console.log(error);
    }
    // Or log a success message
    else {
        console.log("mongoose connection is successful");
    }
});



// -------------------------------------------------
// ROUTES
// -------------------------------------------------


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

// Listen on the port
app.listen(PORT, function () {
    console.log("Listening on port:" + PORT);
});