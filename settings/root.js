let settings = {
    app: {
        listeningPort: 8094
    },
    db: {
        dbType: 'sqlite',
        dbName: './IdeoStreaming.db'
    },
    streaming: {
        method: 'ffmpeg'
    },
    ffmpeg: {
        start:{
            input:{
                webcam:{
                    prefix:'-y -f vfwcap -r 25'
                }
            },
            output:{
                file:{
                    prefix: ''
                },
                twitch:{
                    prefix: '-c:v libx264 -preset fast -pix_fmt yuv420p -s 1280x800 -threads 0 -f flv'
                }
            }
        },
        stop:{
            command:'Taskkill /IM ffmpeg.exe /F'
        }
    }  
}

module.exports=settings