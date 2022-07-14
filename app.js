const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const postsRoutes = require('./routes/posts');

app.use('/posts', postsRoutes);

// Routes
app.get('/', (req, res) => {
    res.send('Homepage');
});

app.get('/posts', (req, res) => {
    res.send('Posts Page');
});

// Connect to DB
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.DB_CONNECTION);
}

// Server Listening
app.listen(3000, () => {
    console.log('Server running on port 3000...');
});