const express = require('express');
const ClientRoute = express.Router();
const app = express();
//JWT
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser')
const ClientController = require('../controllers/ClientController');
const Utils = require('../utils/Utils');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

ClientRoute.post('/listclients',Utils.verifyJWT,(req,res,next)=>{
  var token = jwt.sign(req.body.user, process.env.SECRET, {
    expiresIn: 300 // expires in 5min 
  });

  ClientController.ListClients(token,req,res)
})

ClientRoute.post('/create',Utils.verifyJWT,(req, res, next) => {
    var token = jwt.sign(req.body.user, process.env.SECRET, {
      expiresIn: 300 // expires in 5min 
    });
    ClientController.CreateClient(token,req,res);  
  })

  ClientRoute.post('/login',Utils.verifyJWT,(req, res, next) => {
    var token = jwt.sign(req.body.user, process.env.SECRET, {
      expiresIn: 300 // expires in 5min 
    });
    ClientController.FindClient(req,res,token);
  })


module.exports = ClientRoute;


