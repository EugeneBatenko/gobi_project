const mongoose = require('mongoose')
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')

let user_schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter a name'],
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please enter and password'],
    minlength: [6, 'Minimum password length is 6 characters']
  },
  date: {
    type: Date,
    default: Date.now
  }
})

// Fire a function before doc saved to db
user_schema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

// Static method to login user
user_schema.statics.login = async function(email, password) {
  const user = await this.findOne({email})
  if(user) {
    const auth = await bcrypt.compare(password, user.password)
    if(auth) {
      return user
    }
    throw Error('Incorrect password')
  }
  throw Error('Incorrect email')
}


const User = mongoose.model('user', user_schema)

module.exports = User