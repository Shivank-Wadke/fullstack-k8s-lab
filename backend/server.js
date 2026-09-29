const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://database:27017/labdb';

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection deferred/pending:', err.message));

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the Containerized Backend!' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend server listening on port ${PORT}`);
});
