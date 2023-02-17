// This is required for my local and hosted app

const pgp = require("pg-promise")()
require("dotenv").config()

const { DATABASE_URL, PG_HOST, PG_PORT, PG_DATABASE, PG_USER, PG_PASSWORD } =
  process.env

const cn = DATABASE_URL
  ? {
      connectString: DATABASE_URL,
      max: 30,
      ssl: {
        rejectUnauthorized: false,
      },
    }
  : {
      host: process.env.PG_HOST,
      port: process.env.PG_PORT,
      database: process.env.PG_DATABASE,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
    }

// var db: pgp('postgres://username:password@host:port/database')

const db = pgp(cn)
// const pgp = require("pg-promise")()
// require("dotenv").config()
// const cn = {
//   host: process.env.PG_HOST,
//   port: process.env.PG_PORT,
//   database: process.env.PG_DATABASE,
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
// }
// const db = pgp(cn)
module.exports = db
