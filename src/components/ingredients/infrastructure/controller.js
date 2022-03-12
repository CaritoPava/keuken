const express = require('express')
const router = express.Router()
const { findAll, findOne, create, update, remove } = require('../aplication/getIngredients')

router.get('/', (req, res) => {
  findAll()
    .then(result => res.json(result).status(200))
    .catch(error => res.json({ err: error }).status(400))
})

router.post('/', (req, res) => {
  create(req.body)
    .then(result => res.json(result).status(201))
    .catch(error => res.json({ err: error }).status(400))
})

module.exports = router