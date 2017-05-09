import 'whatwg-fetch'

/**
 *
 *
 * @param {String} url
 * @param {Object} option
 * @returns {Object}
 */
async function ajax(url, option) {
    if (typeof url !== 'string') {
        return
    }
    let config = {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: {}
    }
    Object
        .keys(config)
        .map(key => {
            if (option[key]) {
                if (Object.prototype.toString.call(option[key]) === '[object Object]') {
                   option[key]= JSON.stringify(option[key])
                }
                config[key] = option[key]
            }
        })

    function checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }

    function parseJSON(response) {
        return response.json()
    }
    return new Promise((resolve, reject) => {
        fetch(url, config)
            .then(checkStatus)
            .then(parseJSON)
            .then(data => resolve(data))
            .catch(e => reject(e))
    })
}

export default ajax