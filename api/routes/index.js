const express = require('express');
const router = express.Router();
const Member = require('../models/member');

//Get all members
router.get('/api/', (req, res) => {

    // Member.find().sort( { datefield: -1 })
    //     .then((data) => {
    //         console.log('Data: ', data)
    //         res.json(data);
    //     })
    //     .catch((err) => {
    //         console.log('error: ', err)
    //     })

    Member.aggregate([{$sort: {referralCountTotal: -1, datefield: 1}}])
    .then((data) => {
        console.log('Data: ', data)
        res.json(data);
    })
    .catch((err) => {
        console.log('error: ', err)
    })
});

//Get user from referral code and do logic
router.put('/api/add/:code', (req, res) => {
    
    const code = req.params.code;

    Member.findOneAndUpdate({referralCode: code}, {$inc: {"referralCountTotal": 1}}, 
        {upsert: false}, function(err,doc) {
            if (err) { 
                throw err;
            } else { 
            console.log("Updated")
            res.json({
                msg: "Added 1 to referral count"
            })
            }
          });
    })

    // Member.findOneAndUpdate({code: code},function(){
    //     // if(err){
    //     //     console.log('error : ', err)
    //     // }

    //     Member.findOne({code: code}, function(res){
    //         res.referralCountTotal += 1
    //         res.save();
    //         res.json('referral count: ' + doc.referralCountTotal);
    //     })
        
    //     // doc.referralCountTotal += 1;
        
    //     // doc.shareURL = 'http://localhost:8090/api/' + id;
    //     // doc.save();
        
    // })

//Add new email to waitlist
router.post('/api/add', (req, res) => {
    console.log('Body: ', req.body)
    const data = req.body;

    const newMember = new Member(data);
    newMember.save();
    res.json({
        msg: "we received your data"
    })
});

//Delete a member from the waitlist
router.delete('/api/:id', (req, res) => {

    const id = req.params.id;

    Member.remove({_id: id}, function(err){
        if(err) {
            // res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
            // res.header("Access-Control-Allow-Methods", "PATCH, POST, GET, PUT, DELETE, OPTIONS");
            // res.header("Access-Control-Allow-Methods", "POST, GET, DELETE");
            // res.header("Access-Control-Allow-Credentials", "true");
            return res.send(err);
        } else {
            console.log("successfully deleted")
            res.json({ msg: "Member Deleted"})
        }
    })

})

//Find one specific member from email
router.get('/api/:email', (req, res) => {

    const email = req.params.email;

    Member.find({email: email})
        .then((data) => {
            console.log('Data: ', data)
            res.json(data);
        })
        .catch((err) => {
            console.log('Error: ', err)
        })
})

//Find one specific member from referralCode
router.get('/api/add/:code', (req, res) => {

    const code = req.params.code;

    Member.find({referralCode: code})
        .then((data) => {
            console.log('Data: ', data)
            res.json(data);
        })
        .catch((err) => {
            res.json(err)
            console.log('Error: ', err)
        })
})

module.exports = router;