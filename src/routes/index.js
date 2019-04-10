const express = require('express');
const router = express.Router();
const userRoute = require('../routes/userRoute');
const app = express();
//JWT
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser')
const UserController = require('../controllers/UserController');
const Utils = require('../utils/Utils');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


router.use('/user',userRoute);
// parse requests of content-type - application/x-www-form-urlencoded
router.get('/',Utils.verifyJWT, function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});

//authentication
router.post('/login',Utils.verifyJWT, (req, res, next) => {

  var user = req.body.user;
    if(UserController.FindUserById(user)){
      //auth ok
      //esse id viria do banco de dados
      var token = jwt.sign({user}, process.env.SECRET, {
        expiresIn: 300 // expires in 5min
      });
      res.status(200).send(`Token gerado: {${token}}`);
    }else{

      res.status(500).send('Login inválido!');
    }
    
  })

  router.get('/logout', function(req, res) {
    res.status(200).send({ auth: false, token: null });
  });

  


module.exports = router;