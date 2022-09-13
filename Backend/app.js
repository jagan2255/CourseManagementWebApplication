const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/" , (req,res)=>{
    res.send(`Server Running on ${PORT}`)
})

app.listen( PORT , (req,res)=>{
   console.log(`Server Running on ${PORT}`)
})