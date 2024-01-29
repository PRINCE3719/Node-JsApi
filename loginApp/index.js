const express = require("express")
const app = express()
const authController = require("./controller/controller")
const db = require("./database/db")
const port = 8000;

app.use(express.json())



app.use("/auth",authController)



app.listen(port,()=> console.log("its running on",port));