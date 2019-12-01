const express = require('express');
const multer = require('multer');
const uploadConfig = require('../config/upload')


const upload = multer(uploadConfig);
const app = express();
const ClientRoute = express.Router();
//JWT
const jwt = require('jsonwebtoken');
const ClientController = require('../controllers/ClientController');
const Utils = require('../utils/Utils');

ClientRoute.post('/listclients',Utils.verifyJWT,(req,res,next)=>{
  var token = jwt.sign(req.body.user, process.env.SECRET, {
    expiresIn: 300 // expires in 5min 
  });

  ClientController.ListClients(token,req,res)
})

ClientRoute.post('/create', upload.single('thumbnail'),Utils.verifyJWT,(req, res, next) => {
  debugger
  var token = req.header("x-access-token")
    ClientController.CreateClient(token,req,res);  
  })

  ClientRoute.post('/login',Utils.verifyJWT,(req, res, next) => {
    var token = jwt.sign(req.body.user, process.env.SECRET, {
      expiresIn: 300 // expires in 5min 
    });
    ClientController.FindClient(req,res,token);
  })


module.exports = ClientRoute;


