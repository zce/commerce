import { Router } from 'express'
import { query } from '../models/db'

const router = Router()
router.prefix = '/account'

router.get('/login', (req, res) => {
  res.render('account/login', { title: '登录' })
})

router.post('/login', (req, res) => {
  // res.render('account/login')
  res.send(req.body)
})

router.post('/register', (req, res) => {
  query('select * from products').then(products => {
    res.send(products)
  })

  // res.render('account/login')
  // res.send(req.body)
})

export default router
