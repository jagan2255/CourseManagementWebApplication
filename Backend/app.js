const express = require("express");
const app = express();
const cors=require("cors");
const mongoose= require('mongoose');


const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


const professorRoutes =require("./src/Routes/professor")
const loginRoutes =require("./src/Routes/login");
const studentRoutes=require("./src/Routes/student");
const courseRoutes =require("./src/Routes/course")


//DB Connection

mongoose
  .connect("mongodb+srv://admin:user123@project1.cfkyt.mongodb.net/Internship?retryWrites=true&w=majority" ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });


//Routes

app.use("/professor", professorRoutes);
app.use("/login", loginRoutes);
app.use("/student", studentRoutes);
app.use("/home" , courseRoutes);




app.listen( PORT , (req,res)=>{
   console.log(`Server Running on ${PORT}`)
})