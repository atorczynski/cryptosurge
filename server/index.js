const express = require('express');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

require('dotenv').config();

const routes = require('./newsApi');

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(helmet());
app.use(limiter);

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
