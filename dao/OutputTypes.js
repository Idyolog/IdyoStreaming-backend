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
    }
}

module.exports = OutputTypes