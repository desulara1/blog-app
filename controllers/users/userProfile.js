 const User=require("../../models/user/User");
//const bcrypt=require("bcryptjs");
//const appErr=require("../../utils/appErr");
const profile=async(req,res,next)=>{
    try{
        console.log(req.file);
      res.json({status:"success",
       message:"User profile image upload successfully"});
    //}
   
}catch(error){
res.json(error.message);
}
}
module.exports=profile