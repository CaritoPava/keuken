const store = require('../domain/store')

const findAll = async () => {
  return await store.findAll()
}

const findOne = () => {
  return store.findOne()
}

const create = (createRecipe) => {
  return store.create(createRecipe)
}

const update = () => {
  return store.update()
}

const remove = () => {
  return store.remove()
}

module.exports = {
  findAll,
  findOne,
  create,
  update,
  remove
}