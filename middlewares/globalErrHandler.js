const globalErrHandler=async(err,req,res,next)=>{
    //status:faild/somthing/server error
    //message
    //stack
    const stack=err.stack;
    const message=err.message;
    const status=err.status? err.status:"faild";
    const statusCode=err.statusCode ?err.statusCode:500;
  res.status(statusCode).json({
    message,
    status,
    stack,
  });

}
module.exports=globalErrHandler