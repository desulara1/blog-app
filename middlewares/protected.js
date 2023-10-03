const appErr=require("../utils/appErr")
const protected=(req,res,next)=>{
    //check if user login
    if(req.session.userAuth){
     next();
    }else{
     next(appErr("Not Authorized, login again"))
    }
}
module.exports=protected