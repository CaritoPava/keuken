const express = require('express')
const morgan = require('morgan')
const routes = require('./routes/network')
const { server } = require('../config.js')
const { HOST, PORT } = server

const app = express()

app.use(express.json())
app.use(morgan('dev'))

routes(app)

app.listen(PORT, HOST, () => {
  console.log(`Server running at ${HOST}:${PORT}`)
})