const express=require("express");
const usersRouters=express.Router();
const registerUser=require("../../controllers/users/userRegister");
const login=require("../../controllers/users/userLogin");
const protected =require("../../middlewares/protected");
const profile=require("../../controllers/users/userProfile");
const userDetail=require("../../controllers/users/userDetail");
const updateUser=require("../../controllers/users/updateUser");
const updatePassword=require("../../controllers/users/updatePassword");
const multer=require("multer");
const upload=
multer({
     dest:"public/images",
 }) 
usersRouters.post("/api/v1/users/register",registerUser);
usersRouters.post("/api/v1/users/login",login);
usersRouters.post("/api/v1/users/profile",profile);
usersRouters.get("/api/v1/users/userDetail/:Id",userDetail);
usersRouters.put("/api/v1/users/updateUser/:id",updateUser);
usersRouters.put("/api/v1/users/updatepassword/:id",updatePassword);


module.exports=usersRouters