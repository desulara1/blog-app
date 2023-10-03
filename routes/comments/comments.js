const express=require("express");
const commentRouters=express.Router();
const createcomment=require("../../controllers/comments/comments")
commentRouters.post("/api/v1/comments/createcomment/:id",createcomment)
module.exports=commentRouters