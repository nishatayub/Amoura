const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false,
        min_length: 4
    },
    phoneumber:{
        type: Number
    },
    addresses: [
        {country: {
        type: String,
        required: true
    },
        city: {
        type: String,
    },
        address1: {
        type: String,
    },
        pinCode: {
        type: Number,
    },
        address2:{
        type: String,
        },
        addressType:{
            type: String,
}}]
    
});

module.exports = mongoose.model('User', userSchema);