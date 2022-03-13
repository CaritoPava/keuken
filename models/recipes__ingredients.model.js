const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  return sequelize.define('Ingredient', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
}