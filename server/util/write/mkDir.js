const fs = require('fs')
module.exports = function (path) {
    return new Promise((resolve, reject) => {
        let defaultopintion = {
            encoding: 'utf8',
            flag: 'r'
        }

        fs.mkdir(path,err => {
            if (err) {
                reject(err)
            }
            resolve()
        })
    })
}
