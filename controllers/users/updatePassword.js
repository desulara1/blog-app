const User=require("../../models/user/User");
const appErr = require("../../utils/appErr");
const bcrypt=require("bcryptjs");
const updatePassword=async(req,res,next)=>{
    const {password}=req.body;
    try{
     //check if password update
    if(password){
      const salt=await bcrypt.genSalt(10);
      const hashPassword=await bcrypt.hash(password,salt);
      const user=await  User.findByIdAndUpdate(req.params.id,{
        password:hashPassword,
    },{
    new:true,
    });
      res.json({status:"success",
       message:"Password has been changed successfully"});
    
    }
    //update the user
    
    //}
   
}catch(error){
res.json(next(appErr("please provide password field required")));
}
}
module.exports=updatePassword