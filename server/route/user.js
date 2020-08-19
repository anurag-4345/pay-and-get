const express = require("express");
const route = express.Router();
const { details } = require("../model/cust")
const record = details.find({})
const ObjId = require("mongodb").ObjectID;

//*************new user data add with front end**********
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
        res.send(data)
    })

})

//************add with front end and use multi place*********
route.get("/data/:id", (req, res, next) => {
    details.findById(ObjId(req.body.id), (err, data) => {
        if (err) throw err;
        res.send(data)
    })
})

//*************create bank details add with front end********* 
route.put("/bankDetails/:id", (req, res, next) => {
    let block = JSON.parse(JSON.stringify(req.body))
    let data = details.findByIdAndUpdate(ObjId(req.params.id),
        {
            $set: {
                bank: {
                    BankName: block.bank,
                    BranchName: block.branch,
                    ifscCode: block.ifsc,
                    account: block.acc,
                }
            }
        }
    )
    data.exec((err, data) => {
        if (err) throw err;
        res.send("Bank details")
    })
})

//*************get all list************
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



//*************accept payment save data in database **************
route.put("/amount/:id", (req, res, next) => {
    let bodyValue = JSON.parse(JSON.stringify(req.body))
    let id = req.params.id
    if (id != null) {
        let block = details.findOneAndUpdate({ "_id": id }, {
            $push: {
                paymentDetails: {
                    amount: bodyValue.amount,
                    time: Date.now(),
                    status: false
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

// payment data.
route.get("/amountDetails/:id", (req, res, next) => {
    let block = details.findById(req.params.id);
    block.exec((err, data) => {
        if (err) throw err;
        res.send(data.paymentDetails)
    })
})

//pending paymentCheck (show the setup status)
route.put("/paymentCheck/:_id", (req, res, next) => {
    let check = record.findByIdAndUpdate(ObjId(req.params._id),
        {
            $set: {
                paymentDetails:
                {
                    [0]: {
                        status: true
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


module.exports = route;