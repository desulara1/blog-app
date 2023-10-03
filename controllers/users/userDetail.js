const User=require("../../models/user/User");
const userDetail=async(req,res,next)=>{
    try{
        //get userId from params
    const userID=req.params.Id;
    //find the user
    const user=await  User.findById(userID);
      res.json({status:"success",
       message:user});
    //}
   
}catch(error){
res.json(error.message);
}
}
module.exports=userDetail