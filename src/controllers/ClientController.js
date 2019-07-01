const mongoose = require('mongoose');
const clientSchema = require('../models/Client')

var ClientController = {
    ListClients: function(token,req,res){
        var PClient = mongoose.model('Clients', clientSchema);
        PClient.find({}).then((err, clients) =>{
            res.status(200).json({token,clients})
        })
    },
     CreateClient : function(token,req,res){
        var clientModel = mongoose.model('Clients', clientSchema);
            // Creating one user.
            var client = new clientModel ();
            client.save(client).then((client) => {
                res.status(200).send({token,client})
            });
    },
    EditClient : function(token,req,res){
        var clientModel = mongoose.model('Clients', clientSchema);
            // Creating one user.
            var client = new clientModel ();

            // Saving it to the database.
            client.save(client).then((client) => {
                res.status(200).json({token,client})
            });
    },
    FindUser : function(req,res,token){
        var clientModel = mongoose.model('Clients', clientSchema);
        clientModel.findOne({ 'contact.email': req.body.user.contact.email,'password': req.body.user.password })
        .then((client)=>{
            if(client == null)
                res.status(200).send(null)
            else
                res.status(200).send({token,client})
        })
    }
}
module.exports = ClientController;