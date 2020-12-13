const dbHandler = require('../driver/db/dbHandler')

const InputTypes = {
    getById: (id)=>{
        const query = "select * from InputTypes where id=?"
        return dbHandler.executePreparedQuery(query, [id])
    }
}

module.exports = InputTypes