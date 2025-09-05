const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost/mental-health-social', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
