const { Model, DataTypes } = require('sequelize')
const { dbInstance } = require('../db/sequelize-config')

class User extends Model{

}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING
    },

    password: {
        type: DataTypes.STRING
    }
},{
    sequelize: dbInstance,
    modelName: 'Users',
    createdAt: false,
    updatedAt: false
})

module.exports = { User }