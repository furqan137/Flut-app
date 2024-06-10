import express from 'express';
import connectDB from './configuarations/db.js'; // Ensure the path is correct

// Import routes
import userRoutes from './routes/userRoutes.js'; // User routes
import tailorRoutes from './routes/tailorRoutes.js'; // Tailor routes
import designRoutes from './routes/designRoutes.js'; // Design routes
import orderRoutes from './routes/orderRoutes.js'; // Order routes

const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/tailors', tailorRoutes);
app.use('/api/designs', designRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server Listening on Port http://localhost:${port}`);
});
