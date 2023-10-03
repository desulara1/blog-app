const User=require("../../models/user/User");
const Post=require("../../models/post/Post");

const createPost=async(req,res)=>{
 const {title,description,category,user,image}=req.body
  try{
    console.log(title);
  //find the user
   const userId=req.session.userAuth;
   console.log((userId));
   const userFound=await User.findById(userId);
   const postCreated=await Post.create({
    title,
    description,
    category,
    user: userFound._id,
   });
   userFound.posts.push(postCreated._id);
   await userFound.save();
   res.json({
    status:"success",
    message:postCreated
   })
  }catch(error){

  }
}
module.exports=createPost