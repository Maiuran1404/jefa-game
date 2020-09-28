const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
    rank: Number,
    date: {
        type: String,
        default: new Date().toISOString()
    },
    firstname: String,
    lastname: String,
    email: String,
    referralCode: String,
    referralSource: String,
    referrerReferralCode: String,
    referrerEmail: String,
    referralCountTotal: Number,
    postCountTotal: Number,
    shareURL: String,
    twitterShareURL: String,
    facebookShareURL: String,
    whatsappShareURL: String,
});

const Member = mongoose.model('Member', MemberSchema);
module.exports = Member;
