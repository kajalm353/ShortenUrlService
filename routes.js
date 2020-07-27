const express = require('express');
const bodyParser = require('body-parser');

const url = require('../routes/Url')
const cors = require('../middleware/cors')


module.exports = function (app) {
  app.use(cors)
  app.use(bodyParser({
    limit: '50mb'
  }));
  app.use(express.json());
  app.use('/api/url',url)
};
