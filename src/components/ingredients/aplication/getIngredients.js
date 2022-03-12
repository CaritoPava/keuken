const store = require('../domain/store')

const findAll = async () => {
  return await store.findAll()
}

const findOne = () => {
  return store.findOne()
}

const create = (createIngredient) => {
  return store.create(createIngredient)
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