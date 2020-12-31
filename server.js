
var express = require("express");
var path = require("path");
var http = require("http");
var socketio = require("socket.io");

var app = express();

var server = http.createServer(app);

var io = socketio(server)


var PORT = process.env.PORT || 3013;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));


//We don't need to write a get route like the one below because our middleware on line 15 renders all the files in the public folder.
/*
app.get("/",function(request,response){

    response.sendFile(path.join(__dirname,"./public/index.html"))
})*/


// Run when a client connects using the command -> var socketio = io();
// the argument socket is the particular client that connected.
io.on("connection",function(socket){

    console.log("This is the socket: ")
    console.log(socket)

})



server.listen(PORT,function(){
    console.log("Server up and running, listening on port:"+PORT)
})