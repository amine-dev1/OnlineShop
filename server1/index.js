const express = require('express');
const CorsOptions = require('./config/cors');
const userRoutes = require('./routes/users');
const cors = require('cors');
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(cors(CorsOptions));

app.use('/api',userRoutes);





const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});