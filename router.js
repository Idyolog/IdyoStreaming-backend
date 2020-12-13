const sysConfigController = require('./controllers/SysConfigController')
const streamingController = require('./controllers/streamingController')

const router = (express, app) =>{
    app.use('/sysconfig', sysConfigController(express))
    app.use('/streaming', streamingController(express))
}

module.exports = router

