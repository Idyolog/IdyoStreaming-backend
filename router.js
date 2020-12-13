const AuthLib = require('./libs/AuthLib')
const sysConfigController = require('./controllers/SysConfigController')
const streamingController = require('./controllers/streamingController')

const router = (express, app) =>{
    app.use(AuthLib.authorized)
    app.use('/sysconfig', sysConfigController(express))
    app.use('/streaming', streamingController(express))
}

module.exports = router

