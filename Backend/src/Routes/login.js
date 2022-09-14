const express = require('express')
const router = express.Router();
const jwt = require ("jsonwebtoken");
const bcrypt = require("bcrypt");
const userdata = require('../Model/userSchema');
const saltRounds = 10;




router.post("/signup" , (req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

      var user = req.body.data;

      const salt = bcrypt.genSaltSync(saltRounds);
      const pssd = bcrypt.hashSync(user.password, salt);

      userdata.findOne({email:user.email.trim()})
      .then((data)=>{
      if(data===null){

        var adduser = {
            email:user.email,
            username:user.username,
            password:pssd,
            role:user.role,
            rej:"false",
         }

        var adduser = new userdata(adduser);
        adduser.save();
        res.send({ status: true, data: 'Success' })
      }
      else{
        console.log("Email already taken")
        res.send({ status: false, data: 'Email already taken' })
      }
     })

});












module.exports=router;