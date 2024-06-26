const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serving static files from "public" directory
app.use(express.static('public'));

// Registration endpoint
app.post('/api/register', (req, res) => {
  const { username, password, nickname } = req.body;

  // Simple validation
  if (!username || !password || !nickname) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  // Load user data
  const filePath = path.join(__dirname, 'users.json');
  const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // Check if user already exists
  if (users.find(user => user.username === username)) {
    return res.status(409).json({ success: false, message: 'Username already exists' });
  }

  // Add new user
  const newUser = { username, password, nickname };
  users.push(newUser);
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  res.status(201).json({ success: true, message: 'User registered successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
