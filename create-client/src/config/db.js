const { Pool } = require('pg');

if (process.env.NODE_ENV !== 'ci') {
  const path = require('path');
  const dotenv = require('dotenv');
  dotenv.config({ path: path.resolve(__dirname, '../../.env') });
}

const useSSL = true;  // Set to true if you want to use SSL for PostgreSQL connection

console.log(`Connecting to PostgreSQL with SSL: ${useSSL}`);

const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  ssl: useSSL ? { rejectUnauthorized: false } : false,
});

module.exports = pool;
