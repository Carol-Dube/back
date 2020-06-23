const mongoose = require("mongoose");
var Schema = mongoose.Schema;

// DECLARING HOW DATA SHOULD BE 
var Users = mongoose.model('Users', {
    username:{type: String},
    email:{type: String},
    password: {type: String},
    DateReg: {type: Date, default: Date.now},
});

module.exports = { Users };
