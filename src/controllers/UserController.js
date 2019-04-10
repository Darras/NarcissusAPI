const mongoose = require('mongoose');
const userSchema = require('../models/User')

var UserController = {
    ListUser: function(req,res,next){
        var PUser = mongoose.model('Users', userSchema);
        var users = PUser.find({},function (err, users) {
            res.json(users);
        })
    },
     CreateUser : function(req,res,next){
        var PUser = mongoose.model('Users', userSchema);
            // Creating one user.
            var johndoe = new PUser ({
                login: req.body.user.login, 
                pwd: req.body.user.pwd,
                createdBy: req.body.user._id
            });

            // Saving it to the database.
            johndoe.save(function (err) {if (err) console.log ('Error on save!')});
            console.log('user criado!')
    },
    EditUser : function(req,res,next){
        var PUser = mongoose.model('Users', userSchema);
            // Creating one user.
            var johndoe = new PUser ({
                login: req.body.user.login, 
                pwd: req.body.user.pwd,
                createdBy: req.body.user._id
            });

            // Saving it to the database.
            johndoe.save(function (err) {if (err) console.log ('Error on save!')});
            console.log('user criado!')
    },
    FindUserById : function(user){
        var PUser = mongoose.model('Users', userSchema);
        PUser.findOne({ 'user.login': user.login,'user.psw': user.psw }, function(err, doc) {  
            if (err) {  
              console.error('Usuário não encontrado');  
              return false;
            }  
           
        });  
        return true       
    }


}
module.exports = UserController;