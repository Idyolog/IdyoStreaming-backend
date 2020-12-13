const settings = require('../settings/settings')

const streamingService = require('./streamingService/'+settings.streaming.method+'/streamingService')

module.exports = streamingService