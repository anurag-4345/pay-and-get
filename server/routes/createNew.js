var express = require('express')
var router = express.Router()
const {details} = require('../model/cust')

/* GET users listing. */

router.get('/', function (req, res, next) {
  res.render('login')
})
router.get('/reg', function (req, res, next) {
  res.render('registration')
})


router.get('/bank', function (req, res, next) {
  res.render('bank')
})

router.post('/banksData', function (req, res, next) {
  let dates = details.findOneAndUpdate({
    mobile: req.body.addMob
  }, {
    $set: {
      'BDetails.B_name': req.body.B_name,
      'BDetails.BranchName': req.body.BranchName,
      'BDetails.ifscCode': req.body.ifscCode,
      'BDetails.account': req.body.account
    }
  })
  dates.exec((err, data) => {
    console.log(data)
    res.status(200).redirect('/')
  })
})

module.exports = router