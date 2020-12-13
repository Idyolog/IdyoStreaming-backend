const express = require('express')
const router = require('./router')
const settings = require('./settings/settings')

//const jwtLib=require('./libs/jwtLib')
//console.log(jwtLib.sign())


const main = ()=>{
    let app = express()

    app.use(express.json()) // for parsing application/json
    app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

    router(express, app)

    app.listen(settings.app.listeningPort, () => {
        console.log(`IseoStreaming listening on port ${settings.app.listeningPort}`)
    })
}

main()

