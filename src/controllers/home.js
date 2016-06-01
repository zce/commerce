import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  console.log('Cookies: ', req.cookies)
  res.cookie('cart', { id: 1, name: 'wanglei', data: { items: [1, 2, 3] } }, { maxAge: 900000 })
  res.render('home/index')
})

router.get('/about', (req, res) => {
  throw new Error('hello world')
  res.send('<h1>Hello About</h1>')
})

router.get('/contact', (req, res) => {
  res.send('<h1>Hello About</h1>')
})

export default router
