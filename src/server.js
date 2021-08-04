import logger from './logger'
import app from './app'

const host = process.env.HOST || '127.0.0.1'
const port = Number.parseInt(process.env.PORT) || 5000

async function start() {
  app.listen(port, () => {
    logger.log({
      level: 'info',
      message: `[${app.env}] Server listening on http://${host}:${port}`,
    })
  })
}

start()
