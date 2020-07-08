const mongoose = require('mongoose')
const { URI, URL } = require('../config/keys')

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })

const modalRecord = new mongoose.Schema({
  name: String,
  category: String,
  mobile: Number,
  email: String,
  address: String,
  pinCode: Number,
  date: Date,
  status: Boolean,
  BDetails: {
      B_name: String,
      BranchName: String,
      ifscCode: String,
      account: Number
  },
  amount: Array
})

const records = mongoose.model("customer", modalRecord);
module.exports.details = records