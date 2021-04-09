
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


var playerData = {};
var number = 1

// Run when a client connects using the command -> var socketio = io();
// the argument socket is the particular client that connected.
io.on("connection",function(socket){

    
   

    

    playerData[socket.id] = {playerName:`player ${number}`,playerCount:0,playerRadius:2,playerCount2:0,playerRadius2:100,playerVelocity:60,playerAcceleration:60}
    number += 1
    if(number > 4){
        number = 1
    }


    socket.on("PlayerInputAngle", (message)=>{
        for(const i in playerData){

            if(socket.id === i){

                playerData[i].playerAngleIncrease = message.angleIncrease

                io.emit("PlayerOutputAngle", playerData[i])
                

            }
          
            
        }
        
    })

    socket.on("PlayerInputBulletsWave", (message)=>{
        for(const i in playerData){

            if(socket.id === i){

                

                io.emit("PlayerOutputBulletsWave", playerData[i])
                

            }
          
            
        }
    })

    socket.on("PlayerInputNewCoordinates", (message)=>{

        

        for(const i in playerData){

            if(socket.id === i){

                playerData[i].newCoordinates = message
                
                io.emit("PlayerOutputNewCoordinates", playerData[i])
                

            }
          
            
        }
    })

    socket.on("PlayerInputputResetCount", (message)=>{

        for(const i in playerData){

            if(socket.id === i){
                playerData[i].count = message.count
                playerData[i].bullet = message.count
                playerData[i].count2 = message.count2
                playerData[i].radius = message.radius

                io.emit("PlayerOutputResetCount", playerData[i])
            }
        }
    })

    socket.on("PlayerInputBullets", (message)=>{
        for(const i in playerData){

            if(socket.id === i){

                playerData[i].bullet = message.bullet
                playerData[i].bulletAngle = message.bulletAngle
                playerData[i].bulletVisible = message.bulletVisible

                io.emit("PlayerOutputBullets", playerData[i])
            }
        }
    })

    socket.on("PlayerInputVelocity", (message)=>{
        for(const i in playerData){

            if(socket.id === i){

              

                io.emit("PlayerOutputputResetCount", playerData[i])
            }
        }
    })

    socket.on("PlayerInputCount",(message)=>{

        for(const i in playerData){

            if(socket.id === i){

              

                io.emit("PlayerOutputCount", playerData[i])
            }
        }
    })

    io.emit("playerData", playerData)

    socket.on("disconnect",()=>{
        console.log("Player disconnected from the game: ",socket.id)
        delete playerData[socket.id]
        console.log("This is the current player information stored in playerData: ",playerData)
        /*
        axios.delete("/api/players/",{socketId: socket.id.toString()}).then(results=>{
            console.log("The delete axios request was performed successfully",results)
        }).catch(err=>{
            console.log(`An error was recieved when trying to delete the player with and id of ${socket.id}`,err)
        })*/
    })

    console.log("This is the socket id!!: ",socket.id)



   

    


    
    socket.on("move player", function (message){

        console.log("Direction angle recieved: ", message )
        socket.broadcast.emit("player direction", message)
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