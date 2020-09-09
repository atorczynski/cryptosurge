const express = require('express');
const path = require('path');
//const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const https = require('https');

require('dotenv').config();

const routes = require('./newsApi');

const app = express();

app.use(function (req, res, next) {
  if (req.get('X-Forwarded-Proto') !== 'https') {
    res.redirect('https://' + req.get('Host') + req.url);
  } else next();
});

app.use(morgan('combined'));

app.use('/api/', routes);

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', function (_, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'), function (
    err
  ) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
