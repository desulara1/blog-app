const Post=require("../../models/post/Post");
const appErr = require("../../utils/appErr");

const fetchPost=async(req,res,next)=>{
    try{
   //get the id from params
   const id=req.params.id;
   console.log(id);
   //find the post
   const post=await Post.findById(id);
   res.json({
    status:"success",
    message:post,
   })
    }catch(error){
  next(appErr(error.message));
    }
}
module.exports=fetchPost