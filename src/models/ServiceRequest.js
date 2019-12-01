const mongoose = require('mongoose')
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

    var serviceRequestSchema = new mongoose.Schema({
        description: String,
        price: String,
        dateRequest:Date,
        clientId: {type:ObjectId,ref:'Clients'},
        userId: {type:ObjectId,ref:'Users'},
        state: Boolean
    },{timestamps: true});
  
    module.exports = serviceRequestSchema;