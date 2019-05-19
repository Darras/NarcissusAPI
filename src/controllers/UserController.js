const mongoose = require('mongoose');
const userSchema = require('../models/User')

var UserController = {
    ListUsers: function(req,res,next){
        var PUser = mongoose.model('Users', userSchema);
        PUser.find({},function (err, users) {
            res.json(users);
        })
    },
     CreateUser : async function(token,req,res){
        var userModel = mongoose.model('Users', userSchema);
        var json = '';
            // Creating one user.
            var user = new userModel ({
                name: req.body.user.name,
                password: req.body.user.password,
                contact: {
                    address: req.body.user.contact.address,
                    zipcode: req.body.user.contact.zipcode,
                    country: req.body.user.contact.country,
                    email: req.body.user.contact.email,
                    phone: req.body.user.contact.phone
                }
            });
            user.save(user).then((user) => {
                res.status(200).json({token,user})
            });
    },
    EditUser : function(req,res,next){
        var userModel = mongoose.model('Users', userSchema);
            // Creating one user.
            var user = new userModel ({
                name: req.body.user.name,
                password: req.body.user.password,
                contact: {
                    address: req.body.user.contact.address,
                    zipcode: req.body.user.contact.zipcode,
                    country: req.body.user.contact.country,
                    email: req.body.user.contact.email,
                    phone: req.body.user.contact.phone
                }
            });

            // Saving it to the database.
            user.save(function (err) {if (err) console.log ('Error on save!')});
            console.log('user editado!')
    },
    FindUser : async function(token,req,res){
        var userModel = mongoose.model('Users', userSchema);
        var result = await userModel.findOne({ 'contact.email': req.body.user.contact.email,'password': req.body.user.password })
        .catch((ex)=>{
                console.error('Usuário não encontrado:'+ex);
                return ex;
        });
        res.status(200).json({token,result});
    }
}
module.exports = UserController;