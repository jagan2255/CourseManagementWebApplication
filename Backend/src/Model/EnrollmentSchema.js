const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EnrollmentSchema = new Schema({

  email: String,
  username: String,
  phonenumber: Number,
  address: String,
  qualification: String,
  course: String,

});

var enrollmentdata = mongoose.model('enrollmentdata', EnrollmentSchema);
module.exports = enrollmentdata;