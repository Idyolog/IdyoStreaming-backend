const dao = require('../dao/index')

const sysConfigServices = {
    getAllOutputs: () => {
        return dao.OutputsDao.getAll()
    },

    addOutput: (output)=>{
        if(output == null){
            throw "Error addOutput"
        }
        if(output.active == true){
            output.active = 1
        } else if(output.active == false){
            output.active = 0
        } else {
            throw "Error addOutput"
        }
        if(output.outputType == null){
            throw "Error addOutput"
        }
        return dao.OutputsDao.addOutput(output)
    },

    updateOutput: (output)=>{
        if(output == null){
            throw "Error addOutput"
        }
        if(output.active == true){
            output.active = 1
        } else if(output.active == false){
            output.active = 0
        } else {
            throw "Error addOutput"
        }
        if(output.outputType == null){
            throw "Error addOutput"
        }
        return dao.OutputsDao.updateOutput(output)
    },

    deleteOutput: (output)=>{
        if(output == null){
            throw "Error addOutput"
        }
        return dao.OutputsDao.deleteOutput(output)
    },

    getAllInputs: () => {
        return dao.InputsDao.getAll()
    },

    addInput: (input)=>{
        if(input == null){
            throw "Error addOutput"
        }
        if(input.active == true){
            input.active = 1
        } else if(input.active == false){
            input.active = 0
        } else {
            throw "Error addOutput"
        }
        if(input.inputType == null){
            throw "Error addOutput"
        }
        return dao.InputsDao.addInput(input)
    },

    updateInput: (input)=>{
        if(input == null){
            throw "Error addOutput"
        }
        if(input.active == true){
            input.active = 1
        } else if(input.active == false){
            input.active = 0
        } else {
            throw "Error addOutput"
        }
        if(input.inputType == null){
            throw "Error addOutput"
        }
        return dao.InputsDao.updateInput(input)
    },

    deleteInput: (input)=>{
        if(input == null){
            throw "Error addOutput"
        }
        return dao.InputsDao.deleteInput(input)
    }
}

module.exports = sysConfigServices