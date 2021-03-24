const axios = require("axios")



module.exports = {
    getPlayers: function(){
        return axios.get("/api/players")
    },
    postPlayer: function(playerData){
        return axios.post("/api/players",playerData)
    },
    deletePlayer: function(socketId){
        return axios.delete("/api/players",socketId)
    }

}