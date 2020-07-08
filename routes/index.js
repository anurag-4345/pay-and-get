var express = require('express');
var router = express.Router();
// const mongoose = require("mongoose");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login');
});
router.get('/home', function(req, res, next) {
    res.render('home');
});

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

module.exports = router;