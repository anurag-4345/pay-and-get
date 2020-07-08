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

router.get('/bank', function(req, res, next) {
    res.render('bank');
});

router.post('/banksData', function(req, res, next) {
    res.redirect('/home');
});

module.exports = router;