const mongoose = require('mongoose')
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var clientSchema = new mongoose.Schema({
      //_id: ObjectId,
      region:{
          latitude: Number,
          longitude: Number
      },
      password: { type: String, trim: true },
      contact: {
        name: String,
        address:String,
        zipcode: String,
        country: String,
        email: String,
        phone: String,
        cnpj: String,
        cpf:String
      },
      startDate:Date,
      isAssociated:Boolean,
      SalloonId: ObjectId,
      thumbnail:String,
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