const db = require('.././../db/index')
const ingredients = require('../components/ingredients/infrastructure/controller')
const recipes = require('../components/recipies/infrastructure/controller')

const routes = (app) => {
  db
  app.use('/ingredients', ingredients)
  app.use('/recipes', recipes)
}

module.exports = routes