const mongoose = require('mongoose');
const userSchema = require('../models/User')

var UserController = {
    ListUsers: function(token,req,res){
        var PUser = mongoose.model('Users', userSchema);
        PUser.find({}).then((err, users) =>{
            res.status(200).json({token,users})
        })
    },
     CreateUser : function(token,req,res){
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
            user.save(user).then((user) => {
                res.status(200).send({token,user})
            });
    },
    EditUser : function(token,req,res){
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
            user.save(user).then((user) => {
                res.status(200).json({token,user})
            });
    },
    FindUser : function(req,res,token){
        var userModel = mongoose.model('Users', userSchema);
        userModel.findOne({ 'contact.email': req.body.user.contact.email,'password': req.body.user.password })
        .then((user)=>{
            if(user == null)
                res.status(200).send(null)
            else
                res.status(200).send({token,user})
        })
    }
}
module.exports = UserController;