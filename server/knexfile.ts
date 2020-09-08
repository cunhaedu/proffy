import path from 'path'

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

module.exports = {
  client: process.env.DB_CLIENT,
  connection: {
    filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  useNullAsDefault: true
}
