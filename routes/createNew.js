var express = require('express');
var router = express.Router();
const {} = require("../model/cust")

/* GET users listing. */

router.get('/reg', function(req, res, next) {
    res.render('registration');
});

router.post('/regs', function(req, res, next) {
    const Record = new records({
        name: req.body.name,
        category: req.body.cat,
        mobile: req.body.mobile,
        email: req.body.email,
        address: req.body.address,
        pinCode: req.body.pinCode,
        date: Date.now(),
        status: true,
    })
    Record.save((err, data) => {
        if (err) throw err
            // res.send('Done', data);
        res.redirect('/create/bank');
    })
});

var express = require('express')
var router = express.Router()
const { details } = require('../model/cust')

/* GET users listing. */

router.get('/', function(req, res, next) {
    res.render('login')
})
router.get('/reg', function(req, res, next) {
    res.render('registration')
})

// router.post('/regs', function(req, res, next) {
//     res.redirect('/create/bank');
// });


router.get('/bank', function(req, res, next) {
    res.render('bank')
})

router.put('/banksData/:name', function(req, res, next) {
    let dates = details.findOneAndUpdate({ name: req.param.name }, {
        $set: {
            bank: {
                B_name: req.body.B_name,
                BranchName: req.body.BranchName,
                ifscCode: req.body.ifscCode,
                account: req.body.account
            }
        }
    })
    console.log(dates);
    let Dates = new details({})
    Dates.save((err, data) => {
        console.log(data)
        res.status(200).redirect('/home')
    })
})

module.exports = router