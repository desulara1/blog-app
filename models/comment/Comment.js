const mongoose=require("mongoose");
const commentSchema=new mongoose.Schema({
  
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    message:{
        type:String
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
        },
},
{
timestamps:true,
});
const Comment=mongoose.model("Comment",commentSchema);
module.exports=Comment