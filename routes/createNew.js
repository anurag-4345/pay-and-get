var express = require('express')
var router = express.Router()
const { details } = require('../model/cust')
var ls = require('local-storage')

/* GET users listing. */

router.get('/', function (req, res, next) {
  res.render('login')
})
router.get('/reg', function (req, res, next) {
  res.render('registration')
})

// router.post('/regs', function(req, res, next) {
//     res.redirect('/create/bank');
// });

router.get('/bank', function (req, res, next) {
  res.render('bank')
})

router.post('/banksData', function (req, res, next) {
  let mob = ls.get('mob')
  let dates = details.findOneAndUpdate(
    { mobile: mob },
    {
      $set: {
        'bank.0.B_name': req.body.B_name,
        'bank.0.BranchName': req.body.BranchName,
        'bank.0.ifscCode': req.body.ifscCode,
        'bank.0.account': req.body.account
      }
    }
  )
  dates.exec((err, data) => {
    console.log(data)
    res.status(200).redirect('/home')
  })
})

module.exports = router
