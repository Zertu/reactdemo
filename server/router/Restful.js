const Get =require('./Methods/Get')
,Post = require('./Methods/Post')
/**
 * 处理请求，分配到不同的API中
 * 
 * @param {String} method 请求名
 * @param {Object} ctx Koa的ctx
 * @param {Function} next 
 * @returns {Object} Response 返回处理后的Response
 */
async function router(method,ctx,next){
    let res
    switch (method){
        case 'GET':
        res= GetRes(await Get(ctx))
        break
        case 'POST':
        res= GetRes(await Post(ctx))
        break
        case 'DELETE':
        break
        case 'PUT':
        break
        case 'HEAD':
        break
        case 'OPTIONS':
        return ctx.status = 200
        default:
        ctx.response.status=404
        ctx.body='not found'
        break
    }
    return res
}

/**
 * 处理返回的Response
 * 
 * @param {Object} val 
 * @returns {Object} Response
 */
async function GetRes(Response){
    if(Response.status>=400){
        Response.body=Response.status
    }
    
    return Response
}


module.exports={
    router:router
}
