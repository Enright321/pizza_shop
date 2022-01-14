import express from 'express';

import connectDB from './config/db.js';

import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';

dotenv.config();

connectDB();
const app = express();

app.get('/', (req, res) => {
  res.send('Api is running');
});

app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`)
);
