let settings = require('./root')

settings.db.dbName = "C:\\Users\\lgiuliani\\Documents\\IdeoStreaming.db"

settings.ffmpeg.start.input.webcam.command = '-y -f vfwcap -r 25 -i %%input%%'
settings.ffmpeg.stop.command = 'Taskkill /IM ffmpeg.exe /F'

module.exports = settings