import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import jobRoutes from './routes/job.routes.js'
import dbConnect from './config/mongoose.config.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // allows  CORS to activate

// Connection to MongoDB using environment variable
dbConnect('jobs')

// Routes
app.use('/api', jobRoutes);

// Global error handling middleware


// 404 handler message when the route is not found


// This will Start the server once all conditions have been met
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});