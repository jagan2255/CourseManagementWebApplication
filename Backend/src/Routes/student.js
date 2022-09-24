const express = require('express');
const approveddata = require('../Model/ApprovedSchema');
const router = express.Router();
const EnrollmentData = require("../Model/EnrollmentSchema");
const notificationdata = require('../Model/NotificationSchema');



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


router.get("/messagedata/:id" , (req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

   var id = req.params.id
   console.log(id)

   approveddata.findOne({email:id}).then((data)=>{
    if(data===null){
      res.send()
    }else{
      var course = data.course
      console.log(course)

      notificationdata.find({course:course}).sort({"date": -1}).then((data)=>{
        console.log(data)
        res.send(data)
      })
    }
   })

})




module.exports=router;