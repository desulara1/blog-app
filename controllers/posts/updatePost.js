const Post=require("../../models/post/Post");
const appErr = require("../../utils/appErr");

const updatePost=async(req,res,next)=>{
    try{
   //get the id from params
   const id=req.params.id;
   console.log(id);
   //find the post
   const updatepost=await Post.findByIdAndUpdate(req.params.id,{
   title,
   description,
   category,
   },{
    new:true,
   });
   res.json({
    status:"success",
    message:"post has been updated successfully",
   })
    }catch(error){
  next(appErr(error.message));
    }
}
module.exports=updatePost