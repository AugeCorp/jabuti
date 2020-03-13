const mongoose = require('mongoose')

var MyModel = mongoose.model('Test', new Schema({ name: String }))

module.exports = MyModel

