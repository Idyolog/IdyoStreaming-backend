const dao = require('../dao/index')

const datasourceServices = {
    getAllOutputTypes: async () =>{
        try{
            const d = await dao
            const outTypes = await d.OutputTypes.getAll()
            console.log(outTypes)
        } catch(e){
            console.log(e)
        }
    }
}

module.exports = datasourceServices