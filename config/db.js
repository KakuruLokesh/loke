const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
});

const connectDB = async () => {
  try {
    await pool.connect();
    console.log('PostgreSQL Connected...');
  } catch (err) {
    console.error('Error connecting to PostgreSQL', err.message);
    process.exit(1);
  }
};

const query = (text, params) => pool.query(text, params);

module.exports = { query, connectDB };
