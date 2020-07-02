var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
    res.render('login');
});
router.get('/reg', function(req, res, next) {
    res.render('registration');
});

router.post('/regs', function(req, res, next) {
    res.redirect('/create/bank');
});

router.get('/bank', function(req, res, next) {
    res.render('bank');
});

router.post('/banksData', function(req, res, next) {
    res.redirect('/home');
});

module.exports = router;