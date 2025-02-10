/**
 * Create with faucet
 * Author: ChrisChiu
 * Date: 2022/8/5
 * Desc
 */

const mongoose = require('../db/connect');

const StatisticSchema = new mongoose.Schema({
    TAT: Number,
    UNIT: Number,
    account: String,
    timestamp: {type: Date, default: Date.now},
    date: Number
});

module.exports = mongoose.model('statistic', StatisticSchema);
