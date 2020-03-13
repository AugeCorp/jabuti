const mongoose = require('mongoose')
const dbUrl = require('../app/secure/secrets.json')

module.exports = {
    mongoose,
    dbUrl
}