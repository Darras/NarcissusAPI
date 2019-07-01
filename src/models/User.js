const mongoose = require('mongoose')
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var userSchema = new mongoose.Schema({
      name: String,
      password: { type: String, trim: true },
      contact: {
        address:String,
        zipcode: String,
        country: String,
        email: String,
        phone: String
      },
      state: Boolean
  },{timestamps: true});

  module.exports = userSchema;


  //Oauth2