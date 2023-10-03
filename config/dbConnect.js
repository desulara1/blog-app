const mongoose=require("mongoose");
const dbConnect= async()=>{
  try{
    await mongoose.connect("mongodb://0.0.0.0:27017/blog");
    console.log("DB Connection Successfully");

  }catch(error){
    console.log("DB Connection Failed",error.message);
  }
}
module.exports=dbConnect;