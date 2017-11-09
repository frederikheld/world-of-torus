'use strict'

// Store data:
var client_id = 0; // Running number that is assigned to the clients

// Create socket.io server:
var express = require("express");
var path = require("path");
var app = express();
var server = app.listen("4242", function () {
	console.log(Date.now() + " [socket.io] LISTENING on port " + "4242");
});
var io = require("socket.io").listen(server);

// Make directory "/gui" public available:
app.use(express.static(path.join(__dirname, "gui")));

// Serve "index.html":
app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
});

// Communicate with clients:
io.sockets.on("connection", function (socket) {

	// Init gui:
	console.log(Date.now() + " [socket.io] New client has connected.");
	console.log(Date.now() + " [socket.io] SENDING \"welcome\" event to new client.");
	socket.emit("welcome", {
		"message": "Hello World!",
		"client_id": client_id
	});
	client_id++;

	// Listen to events from client:
	socket.on("user_agent", function (data) {
		console.log(Date.now() + " [socket.io] RECEIVING \"user agent\" event from client: " + data);
	});

});
