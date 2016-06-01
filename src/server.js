import path from 'path'

import express from 'express'
const app = express()

// ===== 请求日志记录 =====
import morgan from 'morgan'
app.use(morgan('dev'))

// ===== 静态文件处理 =====
app.use(express.static(path.resolve(__dirname, '../static')))

// ===== 请求体解析 =====
import bodyParser from 'body-parser'
// for parsing application/json
app.use(bodyParser.json())
  // for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// ===== Cookie解析 =====
import cookieParser from 'cookie-parser'
app.use(cookieParser())

// ===== 视图配置 =====
import view from './view'
view(app)

// ===== 对当前请求进行路由 =====
import router from './router'
router(app)

// ===== 错误处理 =====
import error from './error'
error(app)

// =========================================================================== //
// ============================== 启动应用 开始 ============================== //
// =========================================================================== //

app.listen(2080, error => {
  if (error) throw error
  console.log(`server running @ http://localhost:${2080}/`)
})
export default app

// =========================================================================== //
// ============================== 启动应用 结束 ============================== //
// =========================================================================== //
