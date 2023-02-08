// This is required for my local and hosted app

const pgp = require("pg-promise")()
require("dotenv").config()

const { DATABASE_URL, PG_HOST, PG_PORT, PG_DATABASE, PG_USER } = process.env

const cn = DATABASE_URL
  ? {
      connectString: DATABASE_URL,
      max: 30,
      ssl: {
        rejectUnauthorized: false,
      },
    }
  : {
      host: PG_HOST,
      port: PG_PORT,
      database: PG_DATABASE,
      user: PG_USER,
    }

// var db: pgp('postgres://username:password@host:port/database')

const db = pgp(cn)

module.exports = db
