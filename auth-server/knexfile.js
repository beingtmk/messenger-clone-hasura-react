// Update with your config settings.

const databaseName = "postgres";
const pg = require('pg');

// const connection_url = process.env.DATABASE_URL || `postgres://postgres:@localhost:5432/${databaseName}`;
const dbConfig = {
  user: 'postgres',
  password: 'ultimate',
  database: 'postgres',
  host: '127.0.0.1',
  port: '3306'
 };


module.exports = {
  client: 'pg',
  connection: dbConfig,
  migrations: {
    directory: __dirname + '/db/migrations'
  }
};
