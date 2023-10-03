const Post=require("../../models/post/Post");
const appErr = require("../../utils/appErr");

const deletePost=async(req,res,next)=>{
    try{
   //find the posst
   const post= await Post.findById(req.params.id);
   //check if the post belongs to the user
   if(post.user.toString()!==req.session.userAuth.toString()){
    return next(appErr("you are not allowed to delete this post",403));
   }
   //find the post
   const deletepost=await Post.findByIdAndDelete(req.params.id);
   res.json({
    status:"success",
    message:"post has been deleted successfully",
   })
    }catch(error){
  next(appErr(error.message));
    }
}
module.exports=deletePost