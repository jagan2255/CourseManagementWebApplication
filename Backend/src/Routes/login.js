const express = require('express')
const router = express.Router();



router.post("/signup" , (req,res)=>{
res.header("Access-Control-Allow-Orgin", "*");
res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

      var user = req.body.data;
      

})











module.exports=router;