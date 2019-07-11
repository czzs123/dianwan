const express=require('express');  //引入框架
var router=express.Router();         //创建路由器
const pool=require('../pool.js')   //引入数据池子 

//用户注册 配合用户失焦点事件
router.post('/rega',(req,res)=>{
   //验证用户名和密码是否为空
   var $uname=req.body.uname;
   var $upwd=req.body.upwd;
   /*console.log(req.body);*/
   if($uname==''){
      res.send('0');
	  return;        //这个打死了最大的函数(爷爷 所以爸爸儿子都没了)
   }

   //验证用户名是否重复
   pool.query('select * from zhai_user where uname=?',[$uname],(err,result)=>{
         if(err){throw err};
         if(result.length>0){
		    res.send("2")      //这里面的res.send就是HTML里面的xhr.responseText
			return;     //这个return打死了爸爸 儿子也没了 但是爷爷还在 但是后面没程序了 爷爷老死了
		 }
        //通过验证 将用户名和密码插入数据库  pool.query('sql语句 ?,?...',[?,?...],(err,result)=>{})     
        /*pool.query('insert into zhai_user(uname,upwd) values(?,?)',[$uname,$upwd],(err,result)=>{
         if (err){throw err;}                           //如果insert/update/delete    result.affectedRows>0
                                                     //如果select   [$uname,$upwd]  result.length>0
        if(result.affectedRows>0){res.send('注册成功');}
       });*/
   }); 
});



//用户注册 配合buton按钮
router.post('/reg',(req,res)=>{
   //验证用户名和密码是否为空
   var $uname=req.body.uname;
   var $upwd=req.body.upwd;
   console.log(req.body);
   if($uname==''){
      res.send('0');
	  return;        //这个打死了最大的函数(爷爷 所以爸爸儿子都没了)
   }
   if($upwd==''){
      res.send('1');
	  return;
   }

   //验证用户名是否重复
   pool.query('select * from zhai_user where uname=?',[$uname],(err,result)=>{
         if(err){throw err};
         if(result.length>0){
		    res.send("2")      //这里面的res.send就是HTML里面的xhr.responseText
			return;     //这个return打死了爸爸 儿子也没了 但是爷爷还在 但是后面没程序了 爷爷老死了
		 }
        //通过验证 将用户名和密码插入数据库  pool.query('sql语句 ?,?...',[?,?...],(err,result)=>{})     
        pool.query('insert into zhai_user(uname,upwd) values(?,?)',[$uname,$upwd],(err,result)=>{
         if (err){throw err;}                           //如果insert/update/delete    result.affectedRows>0
                                                     //如果select   [$uname,$upwd]  result.length>0
        if(result.affectedRows>0){res.send('注册成功');}
       });
   }); 
});
  
  
module.exports=router;       //把路由器对象导出















