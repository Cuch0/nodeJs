const { Model, DataTypes } = require('sequelize')
const { dbInstance } = require('../db/sequelize-config')
const { Book } = require('./book-model')

class Library extends Model{

}

Library.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
    },
    location: {
        type: DataTypes.STRING,
    },
    telefono: {
        type: DataTypes.STRING,
    },
    borrado: {
        type: DataTypes.BOOLEAN
    }
},{
    sequelize: dbInstance,
    modelName: 'Librarys',
    createdAt: false,
    updatedAt: false
    
})

Library.hasMany(Book, { foreignKey: 'library' });

module.exports = { Library }