const express=require('express');
const bodyparser=require('body-parser');
const app=express();
const mongoose=require('mongoose');
let user=require('./db.js')
const cors =require('cors');


app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());  
app.use(cors());


// connecting to apartment 
mongoose.connect("mongodb+srv://tanishmodase18:projectcluster@cluster0.wbjdiu1.mongodb.net/majorDB?retryWrites=true&w=majority").then(() =>{
    console.log("connected to apartment DB");
}).catch((err)=>{
    console.log(err);
})


//schema 
const apartmentSchema=mongoose.Schema({
    Apartment_Name:String,
    Apartment_Location:String,
    Apartment_Rent:String,
    Apartment_Deposit:String,
    Apartment_Negotiable:String,
    Apartment_Image_URL:String,
    Apartment_Latitude:String,
    Apartment_Longitude:String,
    Cluster:Number,
    Score:String
})

const apartment=mongoose.model('apartment',apartmentSchema);




app.get("/",function(req,res){
    res.send("Hello this my server");
})


app.get("/getdata",function(req,res){
    
    apartment.find().then((val) =>{
        //  console.log(val);
         res.send(val);
    }).catch((err)=>{
        console.log(err)
    })


    })

app.post("/",function(req,res)
{
      
   console.log(req.body.area)
    const newUser=new user({
       name:req.body.Full_name,
       city:req.body.city,
       gender:req.body.gender,
       age:parseInt(req.body.age),
       occupation:req.body.occupation,
       area:req.body.area,
       preference:req.body.pref
    })
    
    newUser.save();
    console.log("new user added")

   
})
app.listen(5000,function(req,res){
    console.log("Server is running on port 5000");
})