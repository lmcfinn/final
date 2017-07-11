
// var express = require("express");
// var app = express();

// var server = require("http").createServer(app);
// var io = require("socket.io")(server);

// var socket = io.connect("http://localhost:3000/chat");
var socket = io();

socket.on("connect", function(data) {
	socket.emit("join", "Hello server from client");
});


//Listener for "thread" event, which updates messages

socket.on("thread", function(data) {
	$("#thread").append("<li>" + data + "</li>");
});

//Send message to server, resets & prevents default from action
$("form").submit(function() {
	var message = $("#message").val();
	socket.emit("messages", message);
	// this.reset();
	$("#message").val('');
	return false;
})



