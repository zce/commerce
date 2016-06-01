import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hello world</title>
  <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
  <h1>hello world</h1>
</body>
</html>
`)
})

router.get('/about', (req, res) => {
  res.send('<h1>Hello About</h1>')
})

router.get('/contact', (req, res) => {
  res.send('<h1>Hello About</h1>')
})

export default router
