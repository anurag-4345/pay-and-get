const mongoose =require("mongoose");
const {URI,URL} = require("../config/keys")

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true},()=>{
    console.log('connect mongoodb');
})
const conn = mongoose.connection
const modalRecord =new mongoose.Schema({
    name:String,
    category:String,
    mobile:Number,
    email:String,
    address:String,
    pinCode:Number,
    date:Date,
    status:Boolean,
    Bank:{
        B_name:String,
        BranchName:String,
        ifscCode:String,
        account:String,
        B_date:Date
    },
    amount:Array
})

let records = mongoose.model("record",modalRecord);
module.exports.models = records;