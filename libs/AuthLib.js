const jwtLib = require('./jwtLib')

const AuthLib = {
    authorized: (req, res, next) => {
        const authorized = jwtLib.verify(req.headers.authorization)
        if(!authorized){
            res.sendStatus(401)
            return
        }
        next()
    }
}

module.exports = AuthLib