const mongoose = require('mongoose'),
        Schema = mongoose.Schema;

const adminInfoSchema = new Schema({
    empCode: {
        type: String
    },
    adminName: {
        type: String
    },
    userId: {
        type: String
    },
    password: {
        type: String
    }
});

const AdminInfo = module.exports = mongoose.model('AdminInfo', adminInfoSchema);