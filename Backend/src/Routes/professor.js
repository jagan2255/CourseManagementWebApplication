const express = require('express')
const router = express.Router();

const coursedata = require("../Model/courseSchema");


router.get("/getcount" , (req,res)=>{
    var datacount=[]
    coursedata.countDocuments().then((number)=>{
        datacount.push(number)
        console.log(datacount)
        res.send(datacount);
        
    })
})








module.exports=router;