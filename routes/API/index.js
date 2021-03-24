
const router = require("express").Router()
const playerRoutes = require("./player")




router.use("/players",playerRoutes)

console.log("Made it to /routes/API/index.js")




module.exports = router