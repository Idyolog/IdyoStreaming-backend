const dbHandler = require('../driver/db/dbHandler')

const OutputTypes = {
    getAll: async () => {
        const query = "select * from OutputTypes"

        try{
            return await dbHandler.executeQuery(query)
        } catch(e){
            console.log(e)
            throw e
        }
    },

    getById: (id)=>{
        const query = "select * from OutputTypes where id=?"
        return dbHandler.executePreparedQuery(query,[id])
    }
}

module.exports = OutputTypes