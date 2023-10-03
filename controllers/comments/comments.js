const User=require("../../models/user/User");
const Post=require("../../models/post/Post");
const Comment=require("../../models/comment/Comment")
const createCommment=async(req,res)=>{
 const {message}=req.body;
  try{
  //find the post
   const post=await Post.findById(req.params.id);
   // create the comment
   const comment =await Comment.create({
    user:req.session.userAuth,
    message,
   });
   console.log(req.session.userAuth);
   post.comments.push(comment._id);
   const user=await User.findById(req.session._id);
   //push the comment into
   user.comments.push(comment._id);
   //disable validation
   //save
   await post.save({validateBeforeSave:false});
   await user.save({validateBeforeSave:false});
   res.json({
    status:"success",
    message:"comment created"
   })
  }catch(error){
res.json(error);
  }
}
module.exports=createCommment