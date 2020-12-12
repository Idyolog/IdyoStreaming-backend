const settings = require('../../settings/settings')

const dbHandler = require('./'+settings.db.dbType+'/dbHandler')

module.exports = dbHandler

