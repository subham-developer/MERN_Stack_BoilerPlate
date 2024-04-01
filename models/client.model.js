// const mongoose = require('mongoose');
import mongoose from "mongoose";


const clientSchema = mongoose.Schema({
    name:{
        type: 'string'
    },
    emial:{
        type: 'string'
    }
},{ timestamps: true});

const Client = mongoose.model('Client', clientSchema);

export default Client;

// module.exports = Client;