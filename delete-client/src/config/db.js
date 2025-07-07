const { Pool } = require('pg');
require('dotenv').config();


const useSSL = true;  // force using SSL, because AWS RDS requires it
console.log(`Connecting to PostgreSQL with SSL: ${useSSL}`);

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
    ssl: useSSL ? { rejectUnauthorized: false } : false,
});

module.exports = pool;
// This code sets up a connection pool to a PostgreSQL database using environment variables for configuration.
// It uses the 'pg' library to create a new Pool instance with the database connection details.