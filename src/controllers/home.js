import { Router } from 'express'

const router = Router()
router.prefix = '/'

router.get('/', (req, res) => {
  res.locals.title = res.app.name
  res.locals.slides = [
    { title: 'Men’s Fashion 2016', subtitle: 'new collection', summary: 'STARTING AT $65.00. DON’T MISS OUT!', poster: 'img/slider/1.jpg', link: 'shop.html' },
    { title: 'Men’s Fashion 2016', subtitle: 'new collection', summary: 'STARTING AT $65.00. DON’T MISS OUT!', poster: 'img/slider/2.jpg', link: 'shop.html' },
    { title: 'Men’s Fashion 2016', subtitle: 'new collection', summary: 'STARTING AT $65.00. DON’T MISS OUT!', poster: 'img/slider/3.jpg', link: 'shop.html' }
  ]
  res.render('home/index')
})

router.get('/about', (req, res) => {
  res.send('<h1>Hello About</h1>')
})

router.get('/contact', (req, res) => {
  res.send('<h1>Hello About</h1>')
})

export default router
