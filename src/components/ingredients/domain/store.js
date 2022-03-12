const { Ingredient } = require('../../../../db')

const findAll = async () => {
  try {
    return Ingredient.findAll()
  } catch (error) {
    console.log(error.message)
  }
}

const findOne = async () => {
  try {
    return await Ingredient.findAll()
  } catch (error) {
    console.log(error.message)
  }
}

const create = async ({ name }) => {
  try {
    const newIngredient = {
      name
    }
    return await Ingredient.create(newIngredient)
  } catch (error) {
    console.log(error.message)
  }
}

const update = async () => {
  try {
    return Ingredient.findAll()
  } catch (error) {
    console.log(error.message)
  }
}

const remove = async () => {
  try {
    return Ingredient.findAll()
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