const express = require('express');
const pool = require('./database/connection');
//importing env file configuration
require('dotenv').config();

const app = express();

app.use(express.json());

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Database connected successfully at:', res.rows[0].now);
    }
});

app.get('/', (req, res) => {
    res.json({ message: 'Server is running' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});