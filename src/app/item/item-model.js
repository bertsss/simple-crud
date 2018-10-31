const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    age: Number,
    address: String,
    email: String
})

module.exports = mongoose.model('Item', itemSchema)