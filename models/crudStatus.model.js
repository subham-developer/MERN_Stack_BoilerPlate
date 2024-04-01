// const mongoose = require('mongoose');
import mongoose from "mongoose";

const crudStatusSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name']
      },
    slug: String,
    available: {
        type: Number,
        required: false,
        default: 0
      }
},{
    timestamps: true,
});

const CrudStatus = mongoose.model('CrudStatus', crudStatusSchema);

export default CrudStatus;

// module.exports = CrudStatus;