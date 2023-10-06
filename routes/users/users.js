const express=require("express");
const usersRouters=express.Router();
const registerUser=require("../../controllers/users/userRegister");
const login=require("../../controllers/users/userLogin");
const protected =require("../../middlewares/protected");
const profile=require("../../controllers/users/userProfile");
const userDetail=require("../../controllers/users/userDetail");
const updateUser=require("../../controllers/users/updateUser");
const updatePassword=require("../../controllers/users/updatePassword");
const logoutUser=require("../../controllers/users/logoutUser");
const multer=require("multer");
const upload=
multer({
     dest:"public/images",
 }) 
 // renedering user forms

 // render login form 
 usersRouters.get("/api/v1/users/login",(req,res)=>{
    res.render("users/login",{error:""})
 })
 // renedering user register form
 usersRouters.get("/api/v1/users/register",(req,res)=>{
    res.render("users/register",{error:""})
 })
 // renedering user profile form 
 usersRouters.get("/api/v1/users/profile-page",(req,res)=>{
    res.render("users/profile")
 })
 // renedering user upload profile Photo form uploadCoverPhoto
 usersRouters.get("/api/v1/users/upload-profile-photo",(req,res)=>{
    res.render("users/uploadProfilePhoto")
 })
 // renedering user upload cover Photo form 
 usersRouters.get("/api/v1/users/upload-cover-photo",(req,res)=>{
    res.render("users/uploadCoverPhoto")
 })
 // renedering update user form 
 usersRouters.get("/api/v1/users/update-user",(req,res)=>{
    res.render("users/updateUser")
 })
 //end of user rendering forms
usersRouters.post("/api/v1/users/register",registerUser);
usersRouters.post("/api/v1/users/login",login);
usersRouters.post("/api/v1/users/profile",profile);
usersRouters.get("/api/v1/users/userDetail/:Id",userDetail);
usersRouters.put("/api/v1/users/updateUser/:id",updateUser);
usersRouters.put("/api/v1/users/updatepassword/:id",updatePassword);

usersRouters.get("/api/v1/users/logout",logoutUser)
module.exports=usersRouters