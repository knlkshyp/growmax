const mongoose = require('mongoose'),
        Schema = mongoose.Schema;

const empCodeSchema = new Schema({
    empCode: {
        type: String
    }
});

const EmpCodeInfo = module.exports = mongoose.model('EmpCodeInfo', empCodeSchema);