/**
 * 与数据库操作的公共方法
 */

const mysql = require('mysql');

/**
 * 连接池
 */
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'demo',
  connectTimeout: 100
});

exports.query = (sql, params) => new Promise((resolve, reject) => {
  pool.query(sql, params, (error, result, fields) => {
    if (error) {
      reject(error);
    } else {
      resolve(result, fields);
    }
  });
});

exports.format = mysql.format;
