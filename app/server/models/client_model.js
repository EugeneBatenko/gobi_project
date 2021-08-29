const mongoose = require('mongoose')
const {isEmail} = require('validator')

const client_schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    validate: [isEmail, 'Please enter a valid email']
  },
  date: String,
  gender: String,
  status: String
})

const Client = mongoose.model('clients', client_schema)

module.exports = Client