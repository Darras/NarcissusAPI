const mongoose = require('mongoose')
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var clientSchema = new mongoose.Schema({
      // _id: ObjectId,
      name: String,
      password: { type: String, trim: true },
      contact: {
        address:String,
        zipcode: String,
        country: String,
        email: String,
        phone: String,
        cnpj: String,
        cpf:String,
        linkedinUrl:String,
        instagramUrl:String,
        facebookUrl:String,
        pinterestUrl:String
      },
      startDate:Date,
      isAssociated:Boolean,
      SalloonId: ObjectId,
      skills:[
          {
              category:String,
              experience:String,
              rating:String,
          }
        ],
      state: Boolean
  },{timestamps: true});

  module.exports = clientSchema;


  //Oauth2