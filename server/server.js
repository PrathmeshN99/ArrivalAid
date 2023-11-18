const express=require('express');
const bodyparser=require('body-parser');
const app=express();
const mongoose=require('mongoose');
let user=require('./db.js')
const cors =require('cors');


app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());  
app.use(cors());





app.get("/",function(req,res){
    res.send("Hello this my server");
})

app.post("/",function(req,res)
{
      

    const newUser=new user({
       name:req.body.Full_name,
       city:req.body.city,
       gender:req.body.gender,
       age:parseInt(req.body.age),
       occupation:req.body.occupation,
       preference:req.body.pref
    })
    
    newUser.save();
    console.log("new user added")

   
})
app.listen(5000,function(req,res){
    console.log("Server is running on port 5000");
})