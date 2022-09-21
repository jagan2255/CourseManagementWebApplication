const express = require('express')
const router = express.Router();
const EnrollmentData = require("../Model/EnrollmentSchema")



router.post("/enrollstudent" , (req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

  var enroll= req.body;
  console.log(enroll)

  var enrollstudent={
    email: enroll.email,
    username: enroll.username,
    phonenumber: enroll.phonenumber,
    address: enroll.address,
    qualification: enroll.qualification,
    course: enroll.course,
  }

  var enrolldata = new EnrollmentData(enrollstudent)
      enrolldata.save();
      res.send({ status: true, message: 'Success' })

})







module.exports=router;