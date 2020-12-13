const dbHandler = require('../driver/db/dbHandler')

const OutputsDao = {
    getAll: () => {
        const query = "SELECT * from Outputs"
        
        return dbHandler.executeQuery(query)
        
    },
    
    addOutput: (output)=>{
        const query = "INSERT INTO Outputs VALUES(?,?,?);"
        
        return dbHandler.executePreparedQuery(query, [output.output,output.outputType,output.active])
        
    },

    updateOutput: (output)=>{
        const query = "UPDATE Outputs SET outputType=?, active=? WHERE output=?;"
        
        return dbHandler.executePreparedQuery(query, [output.outputType,output.active,output.output])
        
    }
}

module.exports = OutputsDao
