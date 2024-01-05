const express = require('express');
// const myMiddleware = require('./middlewares/myMiddleware'); // Comment or remove this line if not needed
const pug = require('pug');
const path = require('path'); // Don't forget to require path module

const app = express();
const port = 3000;

// view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views')); // Set the views directory correctly

// Middleware
app.use(express.urlencoded({ extended: true }));

// Define routes

// Home route
app.get('/', (req, res) => {
  res.render('home', { title: 'Home Page' });
});

// Home route
app.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' });
  });
  
  // About route
  app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page' });
  });
  
  // Form route
  app.get('/form', (req, res) => {
    res.render('form', { title: 'Form Page' });
  });
  
  // Form submission route
  app.post('/form', (req, res) => {
    console.log('Form data:', req.body);
    res.send('Form submitted successfully!');
  });
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});