const fs = require ('fs')
const exec = require('child_process').exec;
const spawn = require('child_process').spawn;

const utils = {
    readDir: (dir) => {
        return new Promise((resolve, reject)=>{
            fs.readdir(dir, (err, files) => {
                if(err != null){
                    reject(err)
                } else {
                    resolve(files)
                }
            })
        })
    },
    readDirSync: (dir) => {
        return fs.readdirSync(dir)
    },

    executeExternalCommand: (cmd)=>{        
        let process = exec(cmd, function callback(error, stdout, stderr){
            console.log("end")
        });
        /*let process = spawn(cmd, {
            stdio: 'inherit',
            shell: true
          })*/
        return process
    }
}

module.exports = utils