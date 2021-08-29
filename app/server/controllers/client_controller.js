const Client = require('../models/client_model')

exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({message: 'Content not be empty'})
    return
  }
  // new user
  const client = new Client({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status
  })
  // save user in the database
  client
    .save(client)
    .then(data => {
      res.redirect('/add_client')
    })
    .catch(err => {
      res.status(500).send({message: err.message || 'Some error occurred while creation a create operation'})
    })
}

exports.find = (req, res) => {

  if (req.query.id) {
    const id = req.query.id

    Client.findById(id)
      .then(data => {
        if (!data) {
          res.status(404).send({message: `Not found user by id ${id}`})
        } else {
          res.send(data)
        }
      })
      .catch(err => {
        res.status(500).send({message: err.message || 'Cannot find client'})
      })
  } else {
    Client.find()
      .then(client => {
        res.send(client)
      })
      .catch(err => {
        res.status(500).send({message: err.message || 'Error Occurred while retriving client information'})
      })
  }
}

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({message: 'Data to update can not be empty'})
  }

  const id = req.params.id
  Client.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
      if (!data) {
        res.status(404).send({message: `Cannot Update client with ${id}. User not found`})
      } else {
        res.send(data)
      }
    })
    .catch(err => {
      err.status(500).send({message: 'Error Update client information'})
    })
}

exports.delete = (req, res) => {
  const id = req.params.id

  Client.findByIdAndDelete(id)
    .then(data => {
      if (!data) {
        res.status(404).send({message: `Cannot Delete with id ${id}`})
      } else {
        res.send({message: 'Client was deleted'})
      }
    })
    .catch(err => {
      err.status(500).send({message: `Could not delete Client with id=${id}`})
    })
}
