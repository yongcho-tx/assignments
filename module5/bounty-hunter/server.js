const express = require("express")
const app = express()
const uuid = require("uuid").v4
const morgan = require("morgan")


//middleware

app.use(express.json())
app.use(morgan("dev"))

app.use("/bounty", require("./routes/bountyRouter.js"))


app.listen(9002, () => {
    console.log("The bounty server is running on Port 9002")
})