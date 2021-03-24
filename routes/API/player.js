const router = require("express").Router();
const playerController = require("../../controllers");

console.log("Made it to /routes/API/player.js")

router.route("/").post(playerController.create)
    


    


module.exports = router;