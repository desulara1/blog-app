const express=require('express');
require("dotenv").config();
const session=require("express-session");
const app=express();
const dbConnect=require('./config/dbConnect');
dbConnect();
const MongoStore=require("connect-mongo")
const usersRouters=require("./routes/users/users");
const postRouters=require("./routes/posts/posts");
const pcommentRouters=require("./routes/comments/comments")
const globalErrHandler=require("./middlewares/globalErrHandler")
app.use(express.json()); //incoming message pass
app.use(express.urlencoded({extended:true}))

//render home page
app.get("/",(req,res)=>{
  res.render("index");
})
//configure ejs
app.set("view engine","ejs");

//serve static files
app.use(express.static(__dirname + "/public"));
// session config
app.use(
    session({
      secret:'desu',
      resave:false,
      saveUninitialized:true, 
      store: new MongoStore({
        mongoUrl:"mongodb://0.0.0.0:27017/blog",
        ttl:60*60*24, //one day
      }) 
    })
);

//save login user info into locals
app.use((req,res,next)=>{
  if(req.session.userAuth){
    res.locals.userAuth=req.session.userAuth;
  }else{
    res.locals.userAuth=null;
  }
  next();
});
app.use(usersRouters);
app.use(postRouters);
app.use(pcommentRouters);
app.use(globalErrHandler);

const PORT=process.env.PORT||3000










app.listen(PORT,()=>{
console.log(`Server started on port ${PORT}`);
})
