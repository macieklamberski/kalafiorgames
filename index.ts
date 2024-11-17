import { serveStatic } from 'hono/bun'
import { mikrob } from 'mikrob'

export default await mikrob({ serveStatic })
