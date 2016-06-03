import { Router } from 'express'

const router = Router()
router.prefix = '/account'

router.get('/register', (req, res) => {
  res.render('account/register')
})

router.get('/login', (req, res) => {
  res.render('account/login')
})

export default router
