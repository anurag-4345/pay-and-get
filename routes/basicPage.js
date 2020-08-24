const express = require("express");
var  route  = express.Router();

route.get("/total",(req,res)=>{
    res.render("Total");
})

route.get("/cashback",(req,res)=>{
    res.render("cashBack");
})

module.exports = route