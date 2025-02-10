/**
 * Create with faucet
 * Author: ChrisChiu
 * Date: 2022/7/13
 * Desc
 */
const faucet = require('./faucet');

module.exports = (app) => {
    new faucet(app);
};
