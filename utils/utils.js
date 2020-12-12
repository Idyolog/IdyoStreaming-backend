const { rejects } = require("assert")
const { resolve } = require("path")
const fs = require ('fs')

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
    }
}

module.exports = utils