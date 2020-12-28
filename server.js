
var express = require("express");
var path = require("path")

var app = express();


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


app.listen(PORT,function(){
    console.log("Server up and running, listening on port:"+PORT)
})