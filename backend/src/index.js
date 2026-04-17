import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import testRoutes from './routes/testRoutes.js';
import authRoutes from './routes/authRoutes.js';
import distributorRoutes from './routes/distributorRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import productRoutes from './routes/productRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import applicationRoutes from './routes/applicationRoutes.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', testRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/distributors', distributorRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/products', productRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to LarsunLab API' });
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', uptime: process.uptime() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
