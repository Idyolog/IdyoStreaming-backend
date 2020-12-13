const dao = require('../dao/index')

const datasourceServices = {
    getAllOutputTypes: () =>{
        try{
            const outTypes = dao.OutputTypes.getAll()
            console.log(outTypes)
        } catch(e){
            console.log(e)
        }
    }
}

module.exports = datasourceServices