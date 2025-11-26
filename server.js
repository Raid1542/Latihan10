require('dotenv').config();
const express = require('express');
const app = express();
const port = 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes User
const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes);

// Routes Produk
const productRoutes = require('./routes/products.routes');
app.use('/api/products', productRoutes);

// Routes Login
const authRoutes = require('./routes/auth.routes');
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});