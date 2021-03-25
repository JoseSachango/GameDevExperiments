
var express = require("express");
var path = require("path");
var http = require("http");
var socketio = require("socket.io");
var routes = require("./routes")
//var API = require("./public/utils/API")
const mongoose = require("mongoose");
const axios = require("axios")

var app = express();

var server = http.createServer(app);

//var io = socketio.listen(server)
var io = socketio(server)


var PORT = process.env.PORT || 3013;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));

app.use(routes)

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/gamedatabase", {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true 

      }
  );



//We don't need to write a get route like the one below because our middleware on line 15 renders all the files in the public folder.
/*
app.get("/",function(request,response){

    response.sendFile(path.join(__dirname,"./public/index.html"))
})*/


// Run when a client connects using the command -> var socketio = io();
// the argument socket is the particular client that connected.
io.on("connection",function(socket){

   


    socket.on("disconnect",()=>{
        console.log("Player disconnected from the game: ",socket.id)
        /*
        axios.delete("/api/players/",{socketId: socket.id.toString()}).then(results=>{
            console.log("The delete axios request was performed successfully",results)
        }).catch(err=>{
            console.log(`An error was recieved when trying to delete the player with and id of ${socket.id}`,err)
        })*/
    })

    console.log("This is the socket id!!: ",socket.id)



    socket.on("create player", function (userMessageObj) {

        // ("This is the userMessage that's passed in as an argument to the socket.on listener: ")
        // (userMessageObj)



        console.log("This is the playerData: ",userMessageObj)

        socket.broadcast.emit("servermessage", userMessageObj)
    });

    socket.on("rotate player", function (userMessageObj){


        socket.broadcast.emit("player rotation", userMessageObj)
    })

    /*
    socket.on("newPlayer", (obj)=>{
        console.log(`new player event recieved carrying the following object: ${obj}`)
        socket.broadcast.emit("new player has entered the game",socket.id,obj)
    })*/

})



server.listen(PORT,function(){
    console.log("Server up and running, listening on port:"+PORT)
})