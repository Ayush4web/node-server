const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  gender: String,
})

module.exports = mongoose.model('User', userSchema)
