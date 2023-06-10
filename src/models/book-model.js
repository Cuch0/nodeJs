const { Model, DataTypes } = require('sequelize')
const { dbInstance } = require('../db/sequelize-config')

class Book extends Model{

}

Book.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    isbn: {
        type: DataTypes.INTEGER
    },
    titulo: {
        type: DataTypes.STRING
    },
    autor: {
        type: DataTypes.STRING
    },
    year: {
        type: DataTypes.STRING
    },
    library: {
        type: DataTypes.INTEGER,
    },
    borrado: {
        type: DataTypes.BOOLEAN
    }
},{
    sequelize: dbInstance,
    modelName: 'Books',
    createdAt: false,
    updatedAt: false
})

module.exports = { Book }