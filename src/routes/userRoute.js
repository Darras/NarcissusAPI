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
    UserController.ListUser(req,res,next)
})

UserRoute.post('/create',Utils.verifyJWT,(req, res, next) => {
    var token = jwt.sign({user}, process.env.SECRET, {
      expiresIn: 300 // expires in 5min
    });
    UserController.CreateUser(req,res,next);
    
    res.status(200).send('Usuario Cadastrado');
  
  })

module.exports = UserRoute;


