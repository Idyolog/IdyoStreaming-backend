const utils = require('../utils/utils')

const daoGen = () =>{
    try{
        let dao = {}
        const files = utils.readDirSync(__dirname)
        files.forEach(file => {
            if(file != 'index.js'){
                dao[file.split('.')[0]] = require(__dirname + '/'+file)
            }
        })
        return dao
    } catch(e){
        console.log(e)
        process.exit(-1)
    }
}

module.exports = daoGen()

