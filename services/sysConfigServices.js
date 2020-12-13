const dao = require('../dao/index')

const sysConfigServices = {
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
    }
}

module.exports = sysConfigServices