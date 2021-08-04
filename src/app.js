import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
import jwt from 'koa-jwt'
import router from './router'

const app = new Koa()

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(cors())
  .use(
    jwt({
      secret: process.env.JWT_SECRET,
      // audience: process.env.JWT_AUDIENCE,
      // issuer: process.env.JWT_ISSUER,
    }),
  )

export default app
