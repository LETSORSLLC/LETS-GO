const { Pool } = require('pg');
const config = require('./config');

const environment = process.env.NODE_ENV || 'development';
const dbConfig = config[environment].database;

const pool = new Pool({
  host: dbConfig.host,
  port: dbConfig.port,
  user: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
});

module.exports = pool;
