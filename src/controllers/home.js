import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.locals.title = 'Hello world'
  res.render('home/index')
})

router.get('/about', (req, res) => {
  res.send('<h1>Hello About</h1>')
})

router.get('/contact', (req, res) => {
  res.send('<h1>Hello About</h1>')
})

export default router
