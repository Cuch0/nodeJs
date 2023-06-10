const { Sequelize } = require('sequelize')

const dbInstance = new Sequelize({
    host: "localhost",
    database: "node_db",
    username: "root",
    password: "123123",
    port: 3306,
    dialect: "mysql"
})

module.exports = { dbInstance }