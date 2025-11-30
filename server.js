require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

// Test route
app.get('/api/health', (req, res) => {
    res.json({ 
        message: 'API is working!',
        database: 'MongoDB Atlas Connected'
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
});