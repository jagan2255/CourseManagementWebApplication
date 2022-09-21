const express = require('express')
const router = express.Router();

const coursedata = require("../Model/courseSchema");
const enrollmentdata = require('../Model/EnrollmentSchema');


router.get("/getcount" , (req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    var datacount=[]
    coursedata.countDocuments().then((number)=>{
        datacount.push(number)
        enrollmentdata.countDocuments().then((number)=>{
            datacount.push(number);
            console.log(datacount)
            res.send(datacount);
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








module.exports=router;