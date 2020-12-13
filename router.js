const sysConfigController = require('./controllers/SysConfigController');

const router = (express, app) =>{
    app.use('/sysconfig', sysConfigController(express))
}

module.exports = router

