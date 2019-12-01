const mongoose = require('mongoose');
const clientSchema = require('../models/Client')

const ClientController = {
    ListClients: function(token,req,res){
        var PClient = mongoose.model('Clients', clientSchema);
        PClient.find({}).then((clients,err) =>{
            res.status(200).json({token,clients})
        })
    },
     CreateClient : function(token,req,res){
        var clientModel = mongoose.model('Clients', clientSchema);
        const json = JSON.parse(req.body.client);

        const {filename} = req.file;

            // Creating one user.
            var client = new clientModel ({
                region:{
                    latitude: json.client.region.latitude,
                    longitude: json.client.region.longitude
                },
                password: json.client.password,
                contact: {
                  name: json.client.contact.name,
                  address:json.client.contact.address,
                  zipcode: json.client.contact.zipcode,
                  country: json.client.contact.country,
                  email: json.client.contact.email,
                  phone: json.client.contact.phone,
                  cnpj: json.client.contact.cnpj,
                  cpf:json.client.contact.cpf,
                  linkedinUrl:json.client.contact.linkedinUrl,
                  instagramUrl:json.client.contact.instagramUrl,
                  facebookUrl:json.client.contact.facebookUrl,
                  pinterestUrl:json.client.contact.pinterestUrl
                },
                skills:json.client.skills,
                thumbnail: filename,
                state: true  
            });
            
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
    FindClient : function(req,res,token){
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