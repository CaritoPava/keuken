const { Sequelize } = require('sequelize')
const { db } = require('../config')
const { user, password, name, host, port } = db
const IngredientModel = require('../models/ingredients.model')
const RecipeModel = require('../models/recipes.model')

const sequelize = new Sequelize(`postgres://${user}:${password}@${host}:${port}/${name}`, { logging: false })

const Recipe = RecipeModel(sequelize)
const Ingredient = IngredientModel(sequelize)

Recipe.belongsToMany(Ingredient, { through: 'recipe__ingredient' })
Ingredient.belongsToMany(Recipe, { through: 'recipe__ingredient' })

sequelize.sync({ alter: true })
  .then(async () => {
    try {
      await sequelize.authenticate()
      console.log('Connection db has been established successfully')
    } catch (error) {
      console.error('Unable to connect to the database')
    }
  })

module.exports = {
  Recipe,
  Ingredient
}