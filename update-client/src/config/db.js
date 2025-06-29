const { Pool } = require('pg');
require('dotenv').config();


const useSSL = process.env.DB_SSL === 'true';
console.log(`Conectando a PostgreSQL con SSL: ${useSSL}`);

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
    ssl: useSSL ? { rejectUnauthorized: false } : false,
});

module.exports = pool;
