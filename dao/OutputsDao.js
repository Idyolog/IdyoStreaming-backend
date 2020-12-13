const dbHandler = require('../driver/db/dbHandler')

const OutputsDao = {
    addOutput: (output)=>{
        const query = "INSERT INTO Outputs VALUES(?,?,?);"
        
        return dbHandler.executePreparedQuery(query, [output.output,output.outputType,output.active])
        
    }
}

module.exports = OutputsDao
