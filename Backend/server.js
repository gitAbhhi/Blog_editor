const express= require("express")
const connectDB  = require("./config/db")
const app=express()
require("dotenv/config")

app.get(("/"),(req,res)=>{
    res.send("hello api work")
})
connectDB()
app.listen(3000,()=>{
    console.log("server working on port 3000")
})