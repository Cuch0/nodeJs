const { User } = require("../models/user-model");
const jwt = require('jsonwebtoken')

async function login ( name, password ) {
    const user = await User.findOne({
        where: {
            name: name,
            password: password
        }
    })

    if ( !user ) {
        throw new Error("Nombre de usuario y/o password incorrectos")
    }

    const token = jwt.sign({
        id: user.id,
        name : user.name
    },'ClaveSecreta')

    return {
        accessToken: token
    }
}

module.exports = { login }
