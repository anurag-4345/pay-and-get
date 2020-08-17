const mongoose = require('mongoose')
const {URL} = require('../config/keys')

mongoose.connect(URL, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }).then(() => {
  console.log('mongodb connected')
}).catch(err => console.log(err))

const modalRecord = new mongoose.Schema({
  name: String,
  category: String,
  mobile: Number,
  email: String,
  address: String,
  pinCode: Number,
  date: Date,
  status: Boolean,
  bank: {
    BankName: String,
    BranchName: String,
    ifscCode: String,
    account: Number,
  },
  paymentDetails: {
    amount: Number,
    time: Date,
    status: Boolean,
  }
})

const records = mongoose.model("customer", modalRecord);
module.exports.details = records