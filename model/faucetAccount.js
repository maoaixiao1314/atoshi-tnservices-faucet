/**
 * Create with faucet
 * Author: ChrisChiu
 * Date: 2022/7/15
 * Desc
 */

const mongoose = require('../db/connect');

const FaucetAccountSchema = new mongoose.Schema({
    account: {type: String, index: true},
    expiration: {type: Date, default: Date.now},
    tweetExpiration: {type: Date, default: Date.now},
    checkIn: Array,
});

module.exports = mongoose.model('faucetAccount', FaucetAccountSchema);
