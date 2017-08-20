const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/api', (req, res) => {

// });

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
