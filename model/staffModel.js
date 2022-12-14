const mongoose = require("mongoose")
const staffSchema = new mongoose.Schema({
    staffMemberName: String,
    type: String,
    entryTime: String,
    exitTime: String,
    contactNo: Number,
    address: String,
    email: String,
    password: String,
    isAllowed: Boolean,
    agencyName: String,
    agencyContactNumber: Number
})

module.exports = mongoose.model('Staff', staffSchema)