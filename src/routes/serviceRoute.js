const express = require('express');
const ServiceRoute = express.Router();
const app = express();
//JWT
const jwt = require('jsonwebtoken');
const ServiceController = require('../controllers/ServiceController');
const Utils = require('../utils/Utils');


ServiceRoute.post('/listservices',Utils.verifyJWT,(req,res,next)=>{
    var token = jwt.sign(req.body.user, process.env.SECRET, {
        expiresIn: 300 // expires in 5min 
    });

    ServiceController.ListServices(token,req,res)
})

ServiceRoute.post('/create',Utils.verifyJWT,(req, res, next) => {
    var token = jwt.sign(req.body.user, process.env.SECRET, {
    expiresIn: 300 // expires in 5min 
    });
    ServiceController.CreateService(token,req,res);  
})

ServiceRoute.post('/request',Utils.verifyJWT,(req, res, next) => {
    var token = jwt.sign(req.body.user, process.env.SECRET, {
    expiresIn: 300 // expires in 5min 
    });
    ServiceController.CreateServiceRequest(token,req,res);  
})

ServiceRoute.post('/refreshToken',Utils.verifyJWT,(req, res, next) => {
    var token = jwt.sign(req.body.user, process.env.SECRET, {
    expiresIn: 300 // expires in 5min 
    });
    ServiceController.FindService(req,res,token);
})

module.exports = ServiceRoute