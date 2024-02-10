import Koa from 'koa'
import Router from 'koa-router'

function HttpServer() {
  const koa = new Koa()
  const router = new Router()

  router.get('/', (ctx, _) => {
    ctx.response.status = 200
  })

  let server = { close: () => { } }
  router.get('/termination', (ctx, _) => {
    server.close()
    ctx.response.status = 200
  })

  koa.use(router.routes())
  koa.use(router.allowedMethods())

  return {
    requestSystemInitiation: async () => {
      server = koa.listen(19000)
      console.log('http_server is listening')
    },

    requestSystemTermination: async () => {
      console.log('http_server is closing')
      server.close()  
    }
  }
}

export default HttpServer