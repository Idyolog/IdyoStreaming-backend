const sysConfigService = require('../services/sysConfigServices')

const SysConfigController = (app) => {
    let router = app.Router()

    router.post('/output', async (req, res)=>{
        const body = req.body
        console.log(body)
        try{
            await sysConfigService.addOutput(body)
            res.status(201).end()
        } catch(e){
            console.log(e)
            res.status(500).end()
        }
    })

    return router
}

module.exports = SysConfigController