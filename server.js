const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();         
connectDB();            

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const bmiRoutes = require('./routes/bmiRoutes');
app.use('/api/bmi', bmiRoutes);

// Run Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
