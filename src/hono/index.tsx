
import { Hono } from 'hono'

const hono = new Hono()

hono.get('/healthcheck', (context) => {
  return context.json({
    status: 200,
    message: 'lessgoo',
  })
})

if (import.meta.env.DEV) {
  const { readFile } = await import('fs/promises')
  const html = await readFile('index.html', 'utf-8')
  hono.get('*', (c) => c.html(html))
}

export default hono
