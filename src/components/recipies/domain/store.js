const { Recipe, Ingredient } = require('../../../../db')

const findAll = async () => {
  try {
    return Recipe.findAll()
  } catch (error) {
    console.log(error.message)
  }
}

const findOne = async () => {
  try {
    return await Recipe.findAll()
  } catch (error) {
    console.log(error.message)
  }
}

const create = async ({ recipe, ingredientId, id }) => {
  try {
    const newRecipe = {
      name: recipe.name
    }

    const ingredientsId = await Ingredient.findAll({ where: { id: id } })
    ingredientsId.map(async (ingredient) => ingredient.createRecipe(newRecipe))

    // const ingredient = await Ingredient.findByPk(ingredientId)
    // await ingredient.createRecipe(newRecipe)
  } catch (error) {
    console.log(error.message)
  }
}

const update = async () => {
  try {
    return Recipe.findAll()
  } catch (error) {
    console.log(error.message)
  }
}

const remove = async () => {
  try {
    return Recipe.findAll()
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = {
  findAll,
  findOne,
  create,
  update,
  remove
}