const hashpassword = require('../config/PasswordConfig').hashPassword;
const pool = require('../database/connection');


exports.addUser = async(req,res) => {
    const {Email, Password, FirstName, LastName, PhoneNumber} = req.body;

    // Input validation
    if (!Email || !Password || !FirstName || !LastName || !PhoneNumber) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    try {
        // Check if email already exists
        const checkEmail = await pool.query('SELECT email FROM users WHERE email = $1', [Email]);
        if (checkEmail.rows.length > 0) {
            return res.status(409).json({ error: 'Email already registered' });
        }

        const hashed_password = await hashpassword(Password);

        const query = 'INSERT INTO users (email, password_hash, first_name, last_name, phone_number) VALUES ($1, $2, $3, $4, $5)';
        const values = [Email, hashed_password, FirstName, LastName, PhoneNumber];
        
        await pool.query(query, values);
        res.status(201).json({ message: 'User created successfully' });
    }
    catch(error) {
        console.error('Error creating user:', error);
        
        if (error.code === '23505') { // PostgreSQL unique violation code
            res.status(409).json({ error: 'Email already exists' });
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};