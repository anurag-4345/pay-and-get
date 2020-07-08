var express = require('express');
var router = express.Router();
// const mongoose = require("mongoose");
<<<<<<< HEAD
=======
const {details} = require("../model/cust")
>>>>>>> f109e3e31f86641bde8b83c56f7e93a11d99f874

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login');
});
router.get('/home', function(req, res, next) {
    res.render('home');
});

<<<<<<< HEAD
// router.post('/reg', function(req, res, next) {
//     const Record = new records({
//         name: req.body.name,
//         category: req.body.cat,
//         mobile: req.body.mobile,
//         email: req.body.email,
//         address: req.body.address,
//         pinCode: req.body.pinCode,
//         date: Date.now(),
//         status: true,
//     })
//     Record.save((err, data) => {
//         if (err) throw err  
//         res.send('Done', data);
//     })
// });
=======
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
    Record.save((err, data) => {
        if (err) throw err
        console.log('Done', data);
        res.status(200).redirect("/create/bank");
    })
});
>>>>>>> f109e3e31f86641bde8b83c56f7e93a11d99f874

module.exports = router;