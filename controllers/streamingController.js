const streamingService = require("../services/streamingService")

const streamingController = (app) => {
    let router = app.Router()

    router.post('/start', async (req, res)=>{
        try{
            await streamingService.startStreaming()
            res.status(201).end()
        } catch(e){
            console.log(e)
            res.status(500).send(e)
        }
    })

    router.post('/stop', async (req, res)=>{
        try{
            await streamingService.stopStreaming()
            res.status(201).end()
        } catch(e){
            console.log(e)
            res.status(500).send(e)
        }
    })

    return router
}

module.exports = streamingController