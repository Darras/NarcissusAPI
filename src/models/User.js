const mongoose = require('mongoose')
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var userSchema = new mongoose.Schema({
      _id: ObjectId,
      login: String,
      pwd: { type: String, trim: true },
      createdBy: ObjectId,
      modifiedBy: ObjectId,
      userType: String,
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