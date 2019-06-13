import * as functions from 'firebase-functions'
import * as express from 'express'
import NuxtConfiguration from '@nuxt/config'
const { Nuxt } = require('nuxt')

const nuxtConfig: NuxtConfiguration = {
  dev: false,
  buildDir: '.nuxt',
  build: {
    publicPath: '/assets/'
  }
}
const nuxt = new Nuxt(nuxtConfig)

async function handleRequest(req: express.Request, res: express.Response) {
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
  await nuxt.ready()
  return nuxt.render(req, res)
}

const app = express()
app.use(handleRequest)

exports.ssr = functions.https.onRequest(app)
