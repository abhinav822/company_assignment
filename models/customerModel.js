const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },

    lastName: {
        type: String,
    },

    mobileNumber: {
        type: String,
        match: [/^[0-9]{10}$/, "Please enter a valid 10 digit mobile number"]  
    },

    DOB: {
        type: Date,
    },

    emailID: {
        type: String,
    },

    address: {
        type: String,
    },

    customerID: {
        type: String,
        
    },

    status: {
        type: String,
    }
});

module.exports = mongoose.model('customer', customerSchema);

