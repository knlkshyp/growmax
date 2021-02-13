const mongoose = require('mongoose'),
        Schema = mongoose.Schema;

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
    date: {
        type: String
    }
});

const DistribInfo = module.exports = mongoose.model('DistribInfo', distribSchema);