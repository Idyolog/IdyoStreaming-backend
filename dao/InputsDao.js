const dbHandler = require('../driver/db/dbHandler')

const InputsDao = {
    getAll: () => {
        const query = "SELECT * from Inputs"
        
        return dbHandler.executeQuery(query)
        
    },

    addInput: (input)=>{
        const query = "INSERT INTO Inputs VALUES(?,?,?);"
        
        return dbHandler.executePreparedQuery(query, [input.input,input.inputType,input.active])
        
    },

    updateInput: (input)=>{
        const query = "UPDATE Inputs SET inputType=?, active=? WHERE input=?;"
        
        return dbHandler.executePreparedQuery(query, [input.inputType,input.active,input.input])
        
    },

    deleteInput: (input)=>{
        const query = "DELETE FROM Inputs WHERE input=?;"
        
        return dbHandler.executePreparedQuery(query, [input.input])
        
    }
}

module.exports = InputsDao