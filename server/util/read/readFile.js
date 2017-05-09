const fs = require('fs')
module.exports = function (Filename, option) {
    return new Promise((resolve, reject) => {
        let defaultopintion = {
            encoding: 'utf8',
            flag: 'r'
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
        fs.readFile(Filename, defaultopintion, (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}