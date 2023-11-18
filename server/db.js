const mongoose=require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/majorDB").then(() =>{
    console.log("connected to mongoDB");
}).catch((err)=>{
    console.log(err);
})
const userSchema=mongoose.Schema({
    name:String,
    city:String,
    gender:String,
    age:Number,
    occupation:String,
    preference:String
});

user= mongoose.model("user",userSchema);

module.exports=user;


