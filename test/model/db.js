import ava from 'ava'
import db from '../../src/models/db'

ava('db', t => {
  return db.query('select * from products')
    .then(rows => console.log(rows))
})
