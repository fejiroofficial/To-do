require('dotenv').config()
module.exports = {
    development: {
        user: 'postgres',
        password: process.env.DB_PASS,
        database: 'to-dos',
        host: '127.0.0.1',
        port: 5432,
        dialect: 'postgres'
      },
      test: {
        user: 'postgres',
        password: process.env.DB_PASS,
        database: 'to-dosTest',
        host: '127.0.0.1',
        port: 5432,
        dialect: 'postgres'
      },
      production: {
        use_env_variable: 'DATABASE_URL',
      },
}