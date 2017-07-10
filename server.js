/* Mongoose Example (Solution) (18.3.03)
 * ===================================== */

// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require("path");

// Initialize Express
var app = express();

var server = require("http").createServer(app);
var io = require("socket.io")(server);


// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Here's where we establish a connection to the collection
// We bring the model in like any old module
// Most of the magic with mongoose happens there
//
// Example gets saved as a class, so we can create new Example objects
// and send them as validated, formatted data to our mongoDB collection.
var Example = require("./userModel.js");


//socket.io for chat.html
io.on("connection", function(client) {
  console.log("Client connect...");

  client.on("join", function(data) {
    console.log(data);
  });

  client.on("messages", function(data) {
    client.emit("thread", data);
    client.broadcast.emit("thread", data);
  });
});


// Configure app with morgan and body parser
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Static file support with public folder
app.use(express.static("public"));


// Database configuration for mongoose
// db: week18day3mongoose
mongoose.connect("mongodb://localhost/finalproject");
// Hook mongoose connection to db
var db = mongoose.connection;

// Log any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Log a success message when we connect to our mongoDB collection with no issues
db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// Routes
// ======

app.get("/", function(req, res, next) {
  res.sendFile(__dirname + "/public/index.html")
});



// Route to post our form submission to mongoDB via mongoose
app.post("/submit", function(req, res) {

  console.log("xxxxxx")

  // We use the "Example" class we defined above to check our req.body against our user model
  var user = new Example(req.body);

  // With the new "Example" object created, we can save our data to mongoose
  // Notice the different syntax. The magic happens in userModel.js
  user.save(function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
    }
    // Otherwise, send the new doc to the browser
    else {
      console.log('doc', doc)
      res.redirect("/chat");
      // res.send(doc);
    }
  });
});

app.get("/chat", function(req, res) {
	
	// res.render("chat");
	// res.sendFile(__dirname + "/public/chat.html");
	res.sendFile(path.join(__dirname, "/public/chat.html"));
	
	
});



// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
