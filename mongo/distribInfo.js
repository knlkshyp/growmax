const mongoose = require('mongoose'),
        Schema = mongoose.Schema;

// const imageSchema = new Schema({
//     data: Buffer,
//     contentType: String
// });

const distribSchema = new Schema({
    distribCode: {
        type: String
    },
    firmName: {
        type: String
    },
    ownerName: {
        type: String
    },
    experience: {
        type: Number
    },
    annualTurnover: {
        type: Number
    },
    contact: {
        type: String
    },
    firmAddress: {
        type: String
    },
    pin: {
        type: String
    },
    // img:[imageSchema],
    // date: {
    //     type: String
    // }
    img: {
        data: Buffer,
        contentType: String
    },
    img1: {
        data: Buffer,
        contentType: String
    }
});

const DistribInfo = module.exports = mongoose.model('DistribInfo', distribSchema);