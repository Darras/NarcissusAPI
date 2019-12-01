const mongoose = require('mongoose');
const serviceSchema = require('../models/Service')
const serviceRequestSchema = require('../models/ServiceRequest')


const ClientController = {
    ListServices: function(token,req,res){
        var serviceModel = mongoose.model('Services', serviceSchema);
        debugger
        serviceModel.find({clientId:req.body._id}).then((services,err) =>{
            res.status(200).json({token,services})
        })
    },

    CreateServiceRequest : function(token,req,res){
        var serviceModel = mongoose.model('ServiceRequest', serviceRequestSchema);
        debugger

            // Creating one user.
            var service = new serviceModel ({
                description: req.body.description,
                price: req.body.price,
                clientId: req.body.clientId,
                userId: req.body.userId,
                dateSelected: new Date(req.body.dateSelected),
                state: true  
            });
            
            service.save(service).then((svc) => {
                res.status(200).send({token,svc})
            });
    },
     CreateService : function(token,req,res){
        var serviceModel = mongoose.model('Services', serviceSchema);
        debugger

            // Creating one user.
            var service = new serviceModel ({
                description: req.body.description,
                price: req.body.price,
                clientId: req.body.clientId,
                state: true  
            });
            
            service.save(service).then((svc) => {
                res.status(200).send({token,svc})
            });
    },
    // EditClient : function(token,req,res){
    //     var clientModel = mongoose.model('Clients', clientSchema);
    //         // Creating one user.
    //         var client = new clientModel ();

    //         // Saving it to the database.
    //         client.save(client).then((client) => {
    //             res.status(200).json({token,client})
    //         });
    // },
    FindService : function(req,res,token){
        var clientModel = mongoose.model('Clients', clientSchema);
        clientModel.findOne({ 'contact.name': req.body.user.contact.name})
        .then((client)=>{
            if(client == null)
                res.status(200).send(null)
            else
                res.status(200).send({token,client})
        })
    }
}
module.exports = ClientController;