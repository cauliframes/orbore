import Koa from 'koa'
import conditional from 'koa-conditional-get'
import etag from 'koa-etag'
import Router from 'koa-router'

function HttpServer() {
  const koa = new Koa()
  const router = new Router({ prefix: '/api' })

  const toDevelopmentServer = () => koa

  let server = { close: () => { } }
  const requestSystemInitiation = async () => {
    server = koa.listen(9999)
    console.log('http_server is listening')
  }

  const requestSystemTermination = async () => {
    console.log('http_server is closing')
    server.close()
  }

  koa.use(conditional())
  koa.use(etag())

  router.get('/healthcheck', async (ctx, _) => {
    console.log('lah')
    ctx.response.body = {
      status: 200,
      message: 'skrrt skrrt',
    }
  })

  koa.use(router.routes())
  koa.use(router.allowedMethods())

  return {
    toDevelopmentServer,
    requestSystemInitiation,
    requestSystemTermination,
  }
}

export default HttpServer