let User = require('../models/user_model')
const jwt = require('jsonwebtoken')

const handleError = (err) => {
  console.log(err.message, err.code)
  let errors = {email: '', password: ''}

  // Incorrect email
  if(err.message === 'Incorrect email') {
    errors.email = 'That email is not registered'
  }

  // Incorrect password
  if(err.message === 'Incorrect password') {
    errors.password = 'That password is incorrect'
  }

  // Duplicate error code
  if(err.code === 11000) {
    errors.email = 'That email is already registered'
    return errors
  }

  // Validation errors
  if(err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({properties}) => {
      errors[properties.path] = properties.message
    })
  }

  return errors
}

const maxAge = 3 * 24 * 60 * 60
const createToken = (id) => {
  return jwt.sign({id}, process.env.TOKEN_SECRET, {
    expiresIn: maxAge
  })
}

exports.signup = async (req, res) => {
  const {name, email, password} = req.body

  try {
    const user = await User.create({name, email, password})
    const token = createToken(user._id)
    res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge})
    res.status(201).json({user: user._id})

  } catch (err) {
    const errors = handleError(err)
    res.status(400).json({errors})
  }
}

exports.login = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)
    const token = createToken(user._id)
    res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge})
    res.status(201).json({user: user._id})
  } catch (err) {
    const errors = handleError(err)
    res.status(400).json({errors})
  }
}

exports.logout = async (req, res) => {
  res.cookie('jwt', '', {maxAge: 1})
  res.redirect('/login')
}
