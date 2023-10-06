const User=require("../../models/user/User");
const bcrypt=require("bcryptjs");
const appErr=require("../../utils/appErr")
const registerUser=async(req,res,next)=>{
 const {fullName,email,password,profileImage,coverImage}=req.body
  //check all field
 if(!fullName || !email || !password){
    //res.json(next(appErr("All field required")));
   return res.render('users/register',
    {error:"All field required"})
  }
 try{
 //check if user exist
 const userFound=await User.findOne({email});

 //throw an error
 if(userFound){
   return next(appErr("User already exist"));
   return res.json({
    status:"failed",message:"User already exist"
   });
  }
  // hash password
  const salt=await bcrypt.genSalt(10);
   const hashPassword= await bcrypt.hash(password,salt);
  //register user
  const user= await User.create({
    fullName,
    email,
    password:hashPassword,
   })
  //  res.json({
  //   status:"success",
  //   user:user
  //  })
  res.redirect("/api/v1/users/login")
  }catch(error){
  res.json(error.message);
  }
} 
module.exports=registerUser