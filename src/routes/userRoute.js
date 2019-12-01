const express = require('express');
const UserRoute = express.Router();
const app = express();
//JWT
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser')
const UserController = require('../controllers/UserController');
const Utils = require('../utils/Utils');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

UserRoute.post('/ListUsers',Utils.verifyJWT,(req,res,next)=>{
  var token = jwt.sign(req.body.user, process.env.SECRET, {
    expiresIn: 300 // expires in 5min 
  });

  UserController.ListUsers(token,req,res)
})

UserRoute.post('/create',Utils.verifyJWT,(req, res, next) => {
    var token = jwt.sign(req.body.user, process.env.SECRET, {
      expiresIn: 300 // expires in 5min 
    });
    UserController.CreateUser(token,req,res);  
  })

  UserRoute.post('/edit',Utils.verifyJWT,(req, res, next) => {
    var token = jwt.sign(req.body.user, process.env.SECRET, {
      expiresIn: 300 // expires in 5min 
    });
    UserController.EditUser(token,req,res);  
  })

  UserRoute.post('/login',Utils.verifyJWT,(req, res, next) => {
    var token = jwt.sign(req.body.user, process.env.SECRET, {
      expiresIn: 300 // expires in 5min 
    });
    UserController.FindUser(req,res,token);
  })


module.exports = UserRoute;


