import path from 'path'

import express from 'express'
import morgan from 'morgan'

import router from './router'

const app = express()

app.use(morgan('dev'))
app.use(express.static(path.resolve(__dirname, '../static')))

app.use(router)

app.listen(2080, error => {
  if (error) throw error
  console.log(`server running @ http://localhost:${2080}/`)
})
