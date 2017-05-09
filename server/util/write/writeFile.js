const fs = require('fs')
module.exports = function (Filename,data, option) {
    return new Promise((resolve, reject) => {
        let defaultopintion = {
            encoding: 'utf8',
            mode:0o666,
            flag: 'w'
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
        fs.writeFile(Filename,data, defaultopintion, err => {
            if (err) {
                reject(err)
            }
            resolve()
        })
    })
}