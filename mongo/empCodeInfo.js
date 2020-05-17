const mongoose = require('mongoose'),
        Schema = mongoose.Schema;

const empCodeSchema = new Schema({
    employeeCode: {
        type: String
    },
    employeeName: {
        type: String
    },
    zone: {
        type: String
    }
});

const EmpCodeInfo = module.exports = mongoose.model('EmpCodeInfo', empCodeSchema);