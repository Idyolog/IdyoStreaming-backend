const ffmpegSettings = require('../settings/settings').ffmpeg
const utils = require('../utils/utils')

//let processRunning = false

const ffmpeg = {
    start: (inputs, outputs) => {
        try{
            let cmd = `ffmpeg `
            for(const input of inputs){
                const inp = ffmpegSettings.start.input[input.inputType].command.replace('%%input%%', input.input)
                cmd += `${inp}`
            }
            cmd += ' '
            for(const output of outputs){
                const out = ffmpegSettings.start.output[output.outputType].command.replace('%%output%%', output.output)
                cmd += `${out}`
            }
            console.log(cmd)
            //if(!processRunning){
            //    processRunning = true
                utils.executeExternalCommand(cmd)
            /*} else {
                throw "Process Already Executing"
            }*/
        } catch(e){
            throw(e)
        }
    },

    stop: ()=>{
        const cmd = ffmpegSettings.stop.command
        console.log(cmd)
        /*if(process != null){
            console.log("stopping !!")
            process.kill('SIGINT')
            process = null
        }*/

        //if(processRunning){
          //  processRunning = false
            utils.executeExternalCommand(cmd)
        /*} else {
            throw "Process Already Stopped"
        }*/
    }
}

module.exports = ffmpeg