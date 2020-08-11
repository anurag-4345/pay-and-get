const express = require("express");
const route = express.Router();
const { details } = require("../model/cust")
const record = details.find({})

//new user data 
route.post("/basicDetails", (req, res, next) => {
    const data = new details({
        name: req.body.name,
        category: req.body.cate,
        mobile: req.body.mobile,
        email: req.body.email,
        address: req.body.address,
        pinCode: req.body.pinCode,
        status: true,
        date: Date.now()
    })
    data.save((err, data) => {
        if (err) throw err;
        console.log('data save ', data);
    })

})

route.get("/data/:email", (req, res, next) => {
    details.find({ "email": req.body.email }).toArray((err, datalist) => {
        if (err) throw err;
        res.send(datalist)
    })
})

//create bank details
route.put("/bankDetails/:id", (req, res, next) => {
    let data = details.findOneAndUpdate({ "_id": req.params.id },
        {
            $set: {
                bank: {
                    BankName: req.body.bank,
                    BranchName: req.body.branch,
                    ifscCode: req.body.ifsc,
                    account: req.body.acc,
                }
            }
        }
    )
    console.log(req.body);
    data.exec((err, data) => {
        if (err) throw err;
        res.send("Bank details")
    })
})

//get all list
route.get("/all", (req, res, next) => {
    record.exec((err, data) => {
        if (err) throw err;
        res.send(data)
    })
})

//update state for okay with cos
route.put("/update/:_id", (req, res, next) => {
    let check = record.findOneAndUpdate({ "_id": req.params._id },
        { $set: { status: false } })
    check.exec((err, data) => {
        if (err) throw err;
        res.send("done");
    })
})

//pending paymentCheck (show the setup status)
route.put("/paymentCheck/:_id", (req, res, next) => {
    let check = record.findOneAndUpdate({ "_id": req.params._id },
        {
            $set: {
                paymentDetails:
                {
                    [0]: {
                        status: false
                    }
                }
            }
        })
    check.exec((err, data) => {
        if (err) throw err;
        console.log(data);
        res.send("done");
    })
})

//accept payment
route.put("/amount/:id", (req, res, next) => {
    let id = req.params.id
    if (id != null) {
        let block = details.findOneAndUpdate({ "_id": id }, {
            $push: {
                paymentDetails: {
                    amount: req.body.amount,
                    time: Date.now(),
                    status: true
                }
            }
        })
        block.exec((err, data) => {
            if (err) throw err;
            console.log(data);
            res.send(data)
        })
    } else {
        res.end(err)
    }
})



module.exports = route;