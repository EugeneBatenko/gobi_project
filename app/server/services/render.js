const axios = require('axios')

exports.home = (req, res) => {
  res.render('index')
}

exports.dashboard = (req, res) => {
  axios.get(`http://localhost:3000/api/clients`)
    .then(data => {
      res.render('./clients/index', {clients: data.data});
    })
    .catch(err => {
      res.send(err)
    })
}

exports.add_client = (req, res) => {
  axios.get(`http://localhost:3000/api/clients`)
    .then(data => {
      res.render('./clients/add_client')
    })
    .catch(err => {
      res.send(err)
    })

}

exports.update_client = (req, res) => {
  axios.get(`http://localhost:3000/api/clients`, {params: {id: req.query.id}})
    .then(data => {
      res.render('./clients/update_client', {client: data.data})
    })
    .catch(err => {
      res.send(err)
    })
}

exports.login = (req, res) => {
  res.render('./auth/sign_in')
}

exports.signup = (req, res) => {
  res.render('./auth/sign_up')
}
