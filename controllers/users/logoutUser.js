const logoutUser=(req,res)=>{
 req.session.destroy(()=>{
    res.redirect('/api/v1/users/login')
 })
 }
module.exports=logoutUser;