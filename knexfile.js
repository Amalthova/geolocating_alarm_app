require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    searchPath: 'public',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DB_URL_PROD,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    searchPath: 'public',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + './db/seeds'
    }
  }
}

/*
  5 scripts
  first : dev should run the server/index.js file with nodemon]
  second: script make:migration that creates a migration file
  third: migrate should run the latest migrations
  fourth : use knex to make:seed should create a seed file
  fifth : "seed" should run the seeds

  make a dbfolder with a migration file
  make a database in psql and call it practice_db
  design the first table of the schema
  run first migration
  create a seed file, 
  populate seed file
  run seed file

  */