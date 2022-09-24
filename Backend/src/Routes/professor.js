const express = require('express');
const approveddata = require('../Model/ApprovedSchema');
const router = express.Router();

const coursedata = require("../Model/courseSchema");
const enrollmentdata = require('../Model/EnrollmentSchema');
const notificationdata = require('../Model/NotificationSchema');


router.get("/getcount" , (req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    var datacount=[]
    coursedata.countDocuments().then((number)=>{
        datacount.push(number)
        enrollmentdata.countDocuments().then((number)=>{
            datacount.push(number);
           approveddata.countDocuments().then((number)=>{
            datacount.push(number)
            console.log(datacount)
            res.send(datacount);
        })
        })
        
    })
})


router.get("/getrequest" , (req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

  enrollmentdata.find().then((data)=>{
    res.send(data)
  })

})


router.delete("/deletreq/:id" , (req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  
  console.log(req.params)
  var id = req.params.id

   enrollmentdata.findByIdAndDelete({"_id":id}).then((data)=>(
    res.send()
   ))

})



router.get("/approvestudent/:id" , (req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  
  console.log(req.params)
  var id = req.params.id

  enrollmentdata.findById(id).then((data)=>{
    res.send(data)
  })

})


router.post("/approveddata" , (req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  
  var data = req.body;
  console.log(data);

  var id = req.body._id;
  console.log(id)

  var date2join = new Date();
  var dd = String(date2join.getDate()).padStart(2, '0');
  var mm = String(date2join.getMonth() + 1).padStart(2, '0'); 
  var yyyy = date2join.getFullYear();
  date2join = dd + '/' + mm + '/' + yyyy;

  var enrollstudent={
    email: data.email,
    username: data.username,
    phonenumber: data.phonenumber,
    address: data.address,
    qualification: data.qualification,
    course: data.course,
    datejoin:date2join
  }


  var approvedata = new approveddata(enrollstudent)
      approvedata.save();
      res.send({ status: true, message: 'Success' })


  enrollmentdata.findByIdAndDelete(id).then((data)=>{
    res.send()
  })
})



router.get("/getapproveddata" , (req,res)=>{
  approveddata.find().then((data)=>{
    res.send(data)
  })
})


router.delete("/deletapproved/:id" , (req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  
  console.log(req.params)
  var id = req.params.id

   approveddata.findByIdAndDelete({"_id":id}).then((data)=>(
    res.send()
   ))
})


router.post("/bulknotification" , (req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  
   var data = req.body;
   console.log(data);

   var date2join = new Date();
   console.log(date2join)
  //  var dd = String(date2join.getDate()).padStart(2, '0');
  //  var mm = String(date2join.getMonth() + 1).padStart(2, '0'); 
  //  var yyyy = date2join.getFullYear();
  //  date2join = dd + '/' + mm + '/' + yyyy;

   var messsagedata={
    course:data.course,
    message:data.message,
    name:data.professor,
    date:date2join
  }


  var msgdata = new notificationdata(messsagedata)
      msgdata.save();
      res.send({ status: true, message: 'Success' })



})


module.exports=router;