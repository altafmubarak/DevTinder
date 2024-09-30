const express = require("express");

// create an instance of expree whichh act a server
 const app=express();
 
 app.use('/helloo',(req,res)=>{
    res.send("hi  me altaf mubarak your are the gem ");
 })
 app.use('/',(req,res)=>{
    res.send("/url enter");
 })
 const port =7000;
 app.listen(port,()=>{
    console.log("server create succesfully");
 })