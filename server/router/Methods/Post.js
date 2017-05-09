const nodejieba = require("nodejieba")
,topN = 4
exports = module.exports = async function (ctx) {
    const req = ctx.request,
        res = ctx.response
    switch (req.url) {
        case '/login':
            login(req, res)
        case '/fenci':
            fenci(req, res)
        default:
            break
    }
    return ctx.response
}

async function fenci(req, res) {
    res.body = nodejieba.extract(req.body['sentence'],topN)

}

async function login(req, res) {}
