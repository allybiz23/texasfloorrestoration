const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Texas_Floor_Restoration', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err));

// Define Mongoose Schema
const estimateSchema = new mongoose.Schema({
  name: String,
  address: String,
  email: String,
  stoneType: String,
  additionalNotes: String,
  appointmentDate: String,
  appointmentTime: String,
});

const Estimate = mongoose.model('Estimate', estimateSchema);

// API endpoint to save data
app.post('/api/saveData', async (req, res) => {
  const estimate = new Estimate(req.body);
  
  try {
    await estimate.save();
    res.status(201).json({ message: 'Estimate saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save estimate', error });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
