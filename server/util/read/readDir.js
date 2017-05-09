const fs = require('fs')
module.exports = function (path, option) {
    return new Promise((resolve, reject) => {
        let defaultopintion = {
            encoding: 'utf8'
        }
        if (option) {
            if (typeof(option) === 'string') {
                defaultopintion.encoding = option
            } else if (Object.prototype.toString.call(option) === "[object Object]") {
                for (let i in option) {
                    defaultopintion[i] = option[i]
                }
            }
        }

        fs.readdir(path, defaultopintion, (err, files) => {
            if (err) {
                reject(err)
            } else {
                resolve(files)
            }
        })

    })
}