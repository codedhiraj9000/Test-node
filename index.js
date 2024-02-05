const express = require('express');
// const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const userRouter = require('./user');

const app = express();
const port = 3000;

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost/your_database_name', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Use the public directory for static files
app.use(express.static('public'))

// Use user.js for handling user-related database operations
// app.use('/user', userRouter);

// Define routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/game', (req, res)=>{
  res.render('game')
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});