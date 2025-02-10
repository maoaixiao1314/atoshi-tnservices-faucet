/**
 * Create with servicePlatform
 * Author: ChrisChiu
 * Date: 2022/3/24
 * Desc
 */

require('dotenv').config();

module.exports = {
    port: process.env.PORT,
    timeout: 600000,
    nodeHTTP: process.env.BLOCKCHAIN_NODE_HTTP,
    basicAmount: {
        unit: process.env.UNITAMOUNT,
        tat: process.env.TATAMOUNT,
    },
    mq: {
        secretKey: process.env.MQ_SECRETKEY,
        host: process.env.MQ_HOST
    },
    twitter: {
        url: 'https://api.twitter.com',
        authorization: process.env.TWITTER_AUTH,
        officialTweetId: process.env.OFFICIAL_TWEET_ID
    },
    reCaptcha: {
        secretKey: process.env.RECAPTCHA_SECRETKEY
    },
    mongodb: {
        replicaSet: process.env.MONGO_REPLICASET_NAME || false,
        host: process.env.MONGO_HOST,
        database: process.env.MONGO_NAME,
        username: process.env.MONGO_USER,
        password: process.env.MONGO_PWD,
        DB_URL: process.env.MONGO_URL || ''
    },
};
