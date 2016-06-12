import path from 'path'
const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development'

var config = {
  development: {
    app: {
      name: 'demo'
    },
    port: process.env.PORT || 3000,
    db: {
      connectionLimit: 10,
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'demo-dev',
      connectTimeout: 100
    }
  },

  test: {
    app: {
      name: 'demo'
    },
    port: process.env.PORT || 3000,
    db: {
      connectionLimit: 10,
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'demo-test',
      connectTimeout: 100
    }
  },

  production: {
    app: {
      name: 'demo'
    },
    port: process.env.PORT || 3000,
    db: {
      connectionLimit: 10,
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'demo',
      connectTimeout: 100
    }
  }
}

export default config[env]
