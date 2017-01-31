'use strict';

const express = require('express');
const app = express();
const ads = require('./routes/classifieds');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended:false
}));

app.use(bodyParser.json());
app.use(express.static('./public'));
app.use('/classifieds', ads);

const port = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
  console.log('Is this thing on?');
});

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
