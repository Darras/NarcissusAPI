const mongoose = require('mongoose')
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

    var serviceSchema = new mongoose.Schema({
        description: String,
        price: Number,
        clientId: {type:ObjectId,ref:'Clients'},
        state: Boolean
    },{timestamps: true});
  
    module.exports = serviceSchema;