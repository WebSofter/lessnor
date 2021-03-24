const { Pool, Client } = require('pg')
const settings = {
    user: 'admin',
    host: 'localhost',
    database: 'db',
    password: 'secret',
    port: 15432,
  }
const pool = new Pool(settings)
const client = new Client(settings)

client.connect()

export {pool, client}