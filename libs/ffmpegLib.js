const ffmpegSettings = require('../settings/settings').ffmpeg
const utils = require('../utils/utils')

//let processRunning = false

const ffmpeg = {
    start: (inputs, outputs) => {
        try{
            let cmd = `ffmpeg `
            for(const input of inputs){
                cmd += `${ffmpegSettings.start.input[input.inputType].prefix} -i ${input.input}`
            }
            cmd += ' '
            for(const output of outputs){
                cmd += `${ffmpegSettings.start.output[output.outputType].prefix} ${output.output}`
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