const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
});


pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Database connection error:', err.message);
    } else {
        console.log('Connected to Neon database');
    }
});

module.exports = pool;