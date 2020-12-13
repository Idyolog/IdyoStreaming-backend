const jwt = require('jsonwebtoken')
const jwtSettings = require('../settings/settings').jwt

const jwtLib = {
    sign: () => {
        const token = jwt.sign({}, jwtSettings.secret);
        return token
    },

    verify: (token) => {
        try{
            jwt.verify(token, jwtSettings.secret);
            return true
        } catch(e){
            return false
        }
    }
}

module.exports = jwtLib