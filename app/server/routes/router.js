const express = require('express')
const route = express.Router()

const services = require('../services/render')
const {requireAuth, checkUser} = require('../middleware/auth_middleware')

// Users
const clients_controller = require('../controllers/client_controller')
const user_controller = require('../controllers/user_controller')

route.get('*', checkUser)

route.get('/', services.home)

route.get('/dashboard', requireAuth, services.dashboard);
route.get('/add_client', services.add_client)
route.get('/update_client', services.update_client)

// Client API
route.post('/api/clients', clients_controller.create)
route.get('/api/clients', clients_controller.find)
route.put('/api/clients/:id', clients_controller.update)
route.delete('/api/clients/:id', clients_controller.delete)

// Auth
route.get('/signup', services.signup)
route.get('/login', services.login)
route.get('/logout', user_controller.logout)

route.post('/api/signup', user_controller.signup)
route.post('/api/login', user_controller.login)


module.exports = route