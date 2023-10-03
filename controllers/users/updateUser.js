const User=require("../../models/user/User");
const appErr = require("../../utils/appErr");
const updateUser=async(req,res,next)=>{
    const {fullName,email}=req.body;
    try{
     //check if email is not taken
    if(email){
      const emailTaken=await User.findOne({email});
      if(emailTaken){
        return next(appErr("Email is taken",400))
      } 
    }
    //update the user
    const user=await  User.findByIdAndUpdate(req.params.id,{
        fullName,
        email,
    },{
    new:true,
    });
      res.json({status:"success",
       message:user});
    //}
   
}catch(error){
res.json(next(appErr(error.message)));
}
}
module.exports=updateUser