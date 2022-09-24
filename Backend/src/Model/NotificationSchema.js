const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({

  name:String,
  message:String,
  course:String,
  date:String,

});

var notificationdata = mongoose.model('notificationdata', NotificationSchema);
module.exports = notificationdata;