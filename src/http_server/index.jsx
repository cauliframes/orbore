import Koa from 'koa'
import Router from 'koa-router'
import conditional from 'koa-conditional-get'
import etag from 'koa-etag'
import React, { isValidElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server';
const jsx = () => async (ctx, next) => {
  await next()

  if (isValidElement(ctx.response.body)) {
    ctx.response.body = [
      '<!DOCTYPE html>',
      renderToStaticMarkup(ctx.response.body),
    ].join('\n')
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

  router.get('/', async (ctx, _) => {
    ctx.response.body = <h3>
      skrrt
    </h3>
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