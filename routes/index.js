const player = require("./API/player");
const router = require("express").Router();
const APIroutes = require("./API");




router.use("/api",APIroutes);

console.log("Made it to /routes/index.js")





module.exports = router





