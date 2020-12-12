const sqlite3 = require('sqlite3').verbose();
const settings = require('../../../settings/settings')

const db = new sqlite3.Database(settings.db.dbName);

const dbHandler = {
    executeQuery: (query) => {
        return new Promise ((resolve, reject)=>{
            db.all(query, [], (err, rows) => {
                if (err) {
                    reject(err)
                }
                resolve(rows)
            })
        })        
    },

    executePreparedQuery: (query, params) => {
        return new Promise ((resolve, reject)=>{
            db.all(query, params, (err, rows) => {
                if (err) {
                    reject(err)
                }
                resolve(rows)
            })
        }) 
    }
}

module.exports = dbHandler