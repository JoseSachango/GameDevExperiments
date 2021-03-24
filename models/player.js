const mongoose = require("mongoose");
const Schema = mongoose.Schema;


console.log("Made it to /models/player.js")


const playerSchema = new Schema({
    x: {
        type: Number
    },
    y: {
        type: Number
    },
    socketId:{
        type: String
    }

})



const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
