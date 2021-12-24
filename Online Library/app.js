const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const app = express();

// routes
const books = require('./routes/api/books');

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));


// app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);

const port = 8080;
// process.env.PORT ||
app.listen(port, () => console.log(`Server running on port ${port}`));