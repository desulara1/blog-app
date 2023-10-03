const express=require("express");
const postRouters=express.Router();
const createPost=require("../../controllers/posts/posts");
const fetchPost=require("../../controllers/posts/fetchPost");
const fetchAllPost=require("../..//controllers/posts/fetchAllPost");
const deletePost=require("../../controllers/posts/deletePost");
const updatePost=require("../../controllers/posts/updatePost");
postRouters.post("/api/v1/posts/createpost",createPost);
postRouters.get("/api/v1/posts/fetchpost/:id",fetchPost);
postRouters.get("/api/v1/posts/fetchallpost",fetchAllPost);
postRouters.delete("/api/v1/posts/deletepost/:id",deletePost);
postRouters.put("/api/v1/posts/updatepost/:id",updatePost);


module.exports=postRouters