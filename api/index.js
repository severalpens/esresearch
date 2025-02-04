// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Enable CORS for all origins (you can restrict it later)
app.use(express.json()); // Parse incoming JSON requests

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/esresearch', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Define a simple model
const User = mongoose.model('User', new mongoose.Schema({
    name: String,
    email: String,
  }), 'users');
  
  
// Define a simple model
const Faq = mongoose.model('Faq', new mongoose.Schema({
    Question: String,
    Answer: String,
  }), 'faqs');
  
  // Routes
app.get('/', (req, res) => {
  res.send('Express API is running');
});

app.get('/users', (req, res) => {
    User.find()
        .then((users) => {
            console.log('Users:', users);
            return res.json(users);
        })
        .catch((err) => res.status(500).send('Error fetching users: ' + err));
    });

app.get('/faqs', (req, res) => {
    const search = req.query.search;
    let query = {};

    if (search) {
        query = { Question: { $regex: search, $options: 'i' } }; // Case-insensitive search
    }

    Faq.find(query)
        .then((faqs) => {
            console.log('Faqs:', faqs);
            return res.json(faqs);
        })
        .catch((err) => res.status(500).send('Error fetching FAQs: ' + err));
});

app.post('/addUser', (req, res) => {
  const { name, email } = req.body;
  const newUser = new User({ name, email });

  newUser.save()
    .then(() => res.status(201).send('User added successfully'))
    .catch((err) => res.status(500).send('Error adding user: ' + err));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
