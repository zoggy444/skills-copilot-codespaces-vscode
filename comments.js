// Create web server
// Run server
// Create a route for the comments page
// Create a route for the comment form submission
// Create a route for the comment form submission

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/comments', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'comments.html'));
});

app.post('/comments', (req, res) => {
  let comment = req.body.comment;
  res.send(`You submitted: ${comment}`);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});