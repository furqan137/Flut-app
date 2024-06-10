import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';
import tailorRoutes from './routes/tailorRoutes.js';
import designRoutes from './routes/designRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/tailors', tailorRoutes);
app.use('/api/designs', designRoutes);
app.use('/api/orders', orderRoutes);

export default app;
