const sysConfigService = require('../services/sysConfigServices')

const SysConfigController = (app) => {
    let router = app.Router()

    router.get('/output', async (req, res)=>{
        try{
            const outputs = await sysConfigService.getAllOutputs()
            res.json(outputs)
        } catch(e){
            console.log(e)
            res.status(500).end()
        }
    })

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

    router.put('/output', async (req,res)=>{
        const body = req.body
        console.log(body)
        try{
            await sysConfigService.updateOutput(body)
            res.status(201).end()
        } catch(e){
            console.log(e)
            res.status(500).end()
        }
    })

    router.get('/input', async (req, res)=>{
        try{
            const inputs = await sysConfigService.getAllInputs()
            res.json(inputs)
        } catch(e){
            console.log(e)
            res.status(500).end()
        }
    })

    router.post('/input', async (req, res)=>{
        const body = req.body
        console.log(body)
        try{
            await sysConfigService.addInput(body)
            res.status(201).end()
        } catch(e){
            console.log(e)
            res.status(500).end()
        }
    })

    router.put('/input', async (req, res)=>{
        const body = req.body
        console.log(body)
        try{
            await sysConfigService.updateInput(body)
            res.status(201).end()
        } catch(e){
            console.log(e)
            res.status(500).end()
        }
    })

    return router
}

module.exports = SysConfigController