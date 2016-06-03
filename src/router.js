import { join } from 'path'
import glob from 'glob'
import { Router } from 'express'

const router = Router()

glob.sync(join(__dirname, './controllers/*.js')).forEach(item => {
  const controller = require(item).default
  router.use(controller.prefix, controller)
})

// import home from './controllers/home'
// router.use('/', home)

// import account from './controllers/account'
// router.use('/account', account)

export default (app) => {
  app.use(router)
}
