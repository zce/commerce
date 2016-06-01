import { Router } from 'express'

const router = Router()

import home from './controllers/home'
router.use('/', home)

import account from './controllers/account'
router.use('/account', account)

export default (app) => {
  app.use(router)
}
