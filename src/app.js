const express = require('express');
const app = express();
const router = express.Router();
const http = require('http');
const httpProxy = require('express-http-proxy');
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//Rotas
const index = require('./routes/index');
app.use('/', index);


module.exports = app;



  