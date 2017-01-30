'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/../', 'node_modules')));

// app.use('/api/ads', require('./routes/ads'));

const ads = require('./routes/classifieds.js');

app.use('/classifieds', ads);

// app.use('*', function(req, res, next) {
//   res.sendFile('index.html', {root: path.join(__dirname, 'public')})
// })
//
// app.use(function(req, res, next) {
//   var err = new Error('Not Found')
//   err.status = 404
//   next(err)
// })

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
