const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signup', (req, res) => {
  console.log('/signup sucess', req.body);
  // save req.body to database here
  res.send(req.body);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
