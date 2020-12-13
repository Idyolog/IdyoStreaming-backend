const dao = require('../../../dao/index')
const ffmpegLib = require('../../../libs/ffmpegLib')

const streamingService = {
    startStreaming: async()=>{
        const inputs = await dao.InputsDao.getAll()
        const outputs = await dao.OutputsDao.getAll()

        const usedInputs = inputs.filter((input)=>{
            return (input.active == 1)
        })
        const usedOutputs = outputs.filter((output)=>{
            return (output.active == 1)
        })

        if(usedInputs.length > 0 && usedOutputs.length > 0){

            for(let usedInput of usedInputs){
                const inputType = await dao.InputTypes.getById(usedInput.inputType)
                usedInput.inputType = inputType[0].inputType
            }

            for (let usedOutput of usedOutputs){
                const outputType = await dao.OutputTypes.getById(usedOutput.outputType)
                usedOutput.outputType = outputType[0].outputType
            }

            ffmpegLib.start(usedInputs,usedOutputs)
        } else {
            throw "Error Start Streaming"
        }
    },

    stopStreaming: async()=>{
        ffmpegLib.stop()
    }
}

module.exports = streamingService