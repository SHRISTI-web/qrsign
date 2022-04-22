const express=require("express")
const fs =require("fs")
const http=require('https');
const path = require('path')

const multer=require("multer");
const res = require("express/lib/response");
const app=express()

app.use('/',express.static(path.join(__dirname,'public')))
const upload = multer({ dest: 'uploads/' });

app.post('/upload',upload.single('avtar'), function(req, res){
    return res.json({status:"ok"})
} )
app.listen(3000,()=>{
    console.log("your website is running at port 3000")

})