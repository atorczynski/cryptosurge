const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static('client/build'));

// index.html for all page routes    html or routing and naviagtion
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
