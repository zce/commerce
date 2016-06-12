import test from 'ava'
import { query } from '../../src/models/db'

// test('db', async (t) => {
//   const rows = await query('select * from products')
//   t.ok(rows.length > 10, '查询数据正常')
// })


// // 异步箭头函数
// test(async t => {
//   const rows = await query('select * from products')
//   t.ok(rows.length > 100, '查询数据正常')
// })


test(function * (t) {
  const value = yield query('select * from products')
  t.true(value)
})
