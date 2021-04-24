const hello=(req,res)=>{
    res.render("home/index");
};

const login =(req,res)=>{ 
    res.render("home/login");
 };

 module.exports={ //여기가 key 저장되는 곳 
     hello,
     login,
 };