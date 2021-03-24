const schema = require("../models");


console.log("Made it to /controllers/index.js")

module.exports = {
    findAll: function(request,response){
        schema.Player.find({}).then(result=>{response.json(result)}).catch(err=>{response.json(err)})
    },

    findOne: function(request,response){
        schema.Player.findOne({id: request.params.id}).then(result=>{response.json(result)}).catch(err=>{response.json(err)})
    },

    create: function(request,response){
        console.log("This is the playerdata that brought into the controller inside the request.body object: ",request.body)
        schema.Player.create(request.body).then(result=>{console.log("The data was posted successfully to the database")}).catch(err=>{
            //response.json(err) 
            console.log("The player information was not successfully posted here is there error: ",err)
        })

        console.log("This is the player information that needs to be posted to the database: ",request.body)
    },
    remove: function(request,response){
        schema.Player.remove(request.body).then(results=>{
            response.json(results)
        }).catch(err=>{
            response.json(err)
        })
    }
}