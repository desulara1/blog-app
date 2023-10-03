const User=require("../../models/user/User");
const bcrypt=require("bcryptjs");
const appErr=require("../../utils/appErr");
const login=async(req,res,next)=>{
    console.log(req.session);
    const {email,password}=req.body;
     if( !email || !password){
       return next(appErr("Email and Password field are required"));
     //return  res.json({status:"failed",message:"Email and Password field are required"});
      }
    try{

    
    //check user found
    const userFound=await User.findOne({email});
    //throw error
    if(!userFound){
        return next(appErr("Invalid login credentials"));
       //return  res.json({status:"failed",message:"Invalid login credentials"});
    }
    //verify password
    const isPasswordValid=await bcrypt.compare(password,userFound.password);
    if(!isPasswordValid){
        //throw an error
        return next(appErr("Invalid login credentials"));
       //return res.json({status:"failed",message:"Invalid login credentials"});
    }
    req.session.userAuth=userFound;
    console.log(req.session);
    res.json({
    status:"success",
    message:userFound,
    })
}catch(error){
res.json(error.message);
}
}
module.exports=login