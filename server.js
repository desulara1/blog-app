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
app.use(usersRouters);
app.use(postRouters);
app.use(pcommentRouters);
app.use(globalErrHandler);

const PORT=process.env.PORT||3000










app.listen(PORT,()=>{
console.log(`Server started on port ${PORT}`);
})
