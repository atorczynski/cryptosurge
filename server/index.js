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

let allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};
app.use(allowCrossDomain);

app.use(helmet());
app.use(limiter);

app.use(morgan('combined'));

app.use('/api/', routes);

app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(9000);

// app.use(express.static('client/build'));

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
// });

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
