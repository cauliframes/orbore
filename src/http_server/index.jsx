import Koa from 'koa'
import Router from 'koa-router'
import conditional from 'koa-conditional-get'
import etag from 'koa-etag'
import mount from 'koa-mount'
import serve from 'koa-static'
import React, { isValidElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server';
const jsx = () => async (ctx, next) => {
  await next()

  if (isValidElement(ctx.response.body)) {
    ctx.response.body = renderToStaticMarkup(ctx.response.body)
    ctx.response.type = 'text/html; charset=utf-8'
  }
}


function HttpServer() {
  const koa = new Koa()
  const router = new Router()

  let server = { close: () => { } }
  const requestSystemInitiation = async () => {
    server = koa.listen(19000)
    console.log('http_server is listening')
  }

  const requestSystemTermination = async () => {
    console.log('http_server is closing')
    server.close()
  }

  koa.use(conditional())
  koa.use(etag())
  koa.use(jsx())
  koa.use(mount(
    '/public/assets/css',
    serve('public/assets/css'),
  ))

  router.get('/', async (ctx, _) => {
    ctx.response.body = <html>
      <head>
        <link
          rel="stylesheet"
          href="/public/assets/css/index.css"
        />
      </head>
      <body className=''>
        <div className={[
          'flex',
          'justify-center',
          'items-center',
          'w-full',
          'font-bold',
        ].join(' ')}>
          <button className='btn btn-outline'>
            skrrt
          </button>
        </div>
      </body>
    </html>
  })

  router.get('/termination', async (ctx, _) => {
    requestSystemTermination()
    ctx.response.status = 200
  })

  koa.use(router.routes())
  koa.use(router.allowedMethods())

  return {
    requestSystemInitiation,
    requestSystemTermination,
  }
}

export default HttpServer