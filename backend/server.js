require('dotenv').config();
const express = require('express');
const app = express();
// Database Setup
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes')

// Database Setup
connectDB();

// Working with the routes.
app.use(express.json());

// First route.
// Any http request going to localhost:5000/api/products will...
// ...have access to productRoutes.
app.use('/api/products', productRoutes);






const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))



// settting up models folder @21:48 https://www.youtube.com/watch?v=0divhP3pEsg
