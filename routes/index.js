var express = require('express');
var router = express.Router();
var ls = require('local-storage');
const {details} = require("../model/cust")

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login');
});
router.get('/home', function(req, res, next) {
    res.render('homeMe');
});

router.post('/regs', (req, res, next) => {
    const Record = new details({
        name: req.body.name,
        category: req.body.cat,
        mobile: req.body.mobile,
        email: req.body.email,
        address: req.body.address,
        pinCode: req.body.pinCode,
        date: Date.now(),
        status: true,
    })
    ls.set("mob",req.body.mobile)
    Record.save((err, data) => {
        if (err) throw err
        console.log('Done', data);
        res.status(200).redirect("/create/bank");
    })
});

module.exports = router;