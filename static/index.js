const express=require("express")
const fs =require("fs")
const http=require('https');
const path = require('path')
const mongoose=require("mongoose")
const app =express()
app.use('/',express.static(path.join(__dirname,'public')))


app.get("/",(res,req)=>{
    res.sendFile(path.join(__dirname,"public",'index.html'))
})

app.listen(3000,()=>{
    console.log("your website is running at port 3000")
})