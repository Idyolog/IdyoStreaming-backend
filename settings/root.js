let settings = {
    app: {
        listeningPort: 8094
    },
    jwt: {
        secret: "Ideo+-Streaming"
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
                    command:'-y -f vfwcap -r 25 -i %%input%%'
                }
            },
            output:{
                file:{
                    command: '%%output%%'
                },
                twitch:{
                    command: '-c:v libx264 -preset fast -pix_fmt yuv420p -s 1280x800 -threads 0 -f flv "%%output%%"'
                }
            }
        },
        stop:{
            command:'Taskkill /IM ffmpeg.exe /F'
        }
    }  
}

module.exports=settings