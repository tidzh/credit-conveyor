const { Client } = require('pg')

const db = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORLD,
  port: process.env.DB_PORT,
  ssl: {
	rejectUnauthorized: false
  }
});

db.connect()


module.exports = { db };
