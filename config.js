require('dotenv').config()

const config = {
  server: {
    HOST: process.env.HOST_SERVER,
    PORT: process.env.PORT_SERVER
  },
  db: {
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    name: process.env.NAME_DB,
  }
}

module.exports = config