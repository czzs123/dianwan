const express=require('express');  //引入框架
const pool=require('../pool.js')   //引入数据池子 


var router=express.Router();         //创建路由器
/* 用户注册功能 */
//用户名验证重复
router.post('/rega',(req,res)=>{
    var $uname=req.body.uname;
    console.log($uname);
    //验证用户名是否重复
    pool.query('select * from dianwanbashi_user where uname=?',[$uname],(err,result)=>{
        if(err){throw err};
        if(result.length>0){
			//重复
		   res.send("-1");  //这里面的res.send就是HTML里面的xhr.responseText
		   return;     
		}else{
		res.send("1");
		return;}
		});
});
//用户注册 提交数据
router.post('/reg',(req,res)=>{
   //req={body:{uname:$("#uname").val(),upwd:$("#upwd").val()}}
   var $uname=req.body.uname;
   var $upwd=req.body.upwd;
   console.log(req.body);
   //验证用户名是否重复
   pool.query('select * from dianwanbashi_user where uname=?',[$uname],(err,result)=>{
        if(err){throw err};
        if(result.length>0){
			//重复
		    res.send("-1");  //这里面的res.send就是HTML里面的xhr.responseText
			return;     
		}
        //通过验证 将用户名和密码插入数据库
		//如果insert/update/delete result.affectedRows>0  如果select  result.length>0
		var url="insert into dianwanbashi_user(uname,upwd) values(?,md5(?))";
        pool.query(url,[$uname,$upwd],(err,result)=>{
            if(err){throw err;}   
			console.log(result);
			   //增删改的话 返回对象result result里面的属性affectedRows长度大于0 说明成功
            if(result.affectedRows>0){
                
                //var url = 
			    res.send('1');
			}
        });
   }); 
});

  //用户登录 配合button按钮
  router.post('/login',(req,res)=>{
   var $uname=req.body.uname;
   var $upwd=req.body.upwd;
   console.log(req.body);
   //从数据查找用户名和密码
      pool.query('select uid from dianwanbashi_user where uname=? and upwd=md5(?)',[$uname,$upwd],(err,result)=>{
         if(err){throw err};
		 //查询的话 返回数组result 判断result(数组)长度 如果大于0 说明查询出来结果
         if(result.length>0){
			 /*console.log(result);
			 console.log( re
      pool.query('select uid from dianwanbashi_user where uname=? and upwd=md5(?)',[$uname,$upwd],(err,result)=>{
         if(err){throw err};
         if(result.length>0){
			 /*console.log(result);
			 console.log( result[0].uid);*/
		    res.send("1");      //这里面的res.send就是HTML里面的xhr.responseText
			return;     //这个return打死了爸爸 儿子也没了 但是爷爷还在 但是后面没程序了 爷爷老死了
		 }else{
         res.send('-1');
		 }
     }); 
  });

  
////登录前的失焦点事件
//router.post('/logina',(req,res)=>{
//   //验证用户名和密码是否为空
//   var $uname=req.body.uname;
//   var $upwd=req.body.upwd;
//   console.log(req.body);
//   if($uname==''){
//      res.send('0');
//	  return;        
//   }
//
//   //验证用户名是否可用
//   pool.query('select * from zhai_user where uname=?',[$uname],(err,result)=>{
//         if(err){throw err};
//         if(result.length>0){
//		    res.send("-2")      //这里面的res.send就是HTML里面的xhr.responseText
//			/*return; */    //这个return打死了爸爸 儿子也没了 但是爷爷还在 但是后面没程序了 爷爷老死了
//		 }else{
//		  res.send('-3');
//		  return;
//		  }
//        //通过验证 将用户名和密码插入数据库  pool.query('sql语句 ?,?...',[?,?...],(err,result)=>{})     
//      /*  pool.query('insert into zhai_user(uname,upwd) values(?,?)',[$uname,$upwd],(err,result)=>{
//         if (err){throw err;}                           //如果insert/update/delete    result.affectedRows>0
//                                                     //如果select   [$uname,$upwd]  result.length>0
//        if(result.affectedRows>0){res.send('注册成功');}
//       });*/
//   }); 
//});
//
////用户登录 配合button按钮
//router.post('/login',(req,res)=>{
//   //验证用户名和密码是否为空
//   var $uname=req.body.uname;
//   var $upwd=req.body.upwd;
//   console.log(req.body);
//   if($uname==''){
//      res.send('0');
//	  return;        //这个打死了最大的函数(爷爷 所以爸爸儿子都没了)
//   }
//   if($upwd==''){
//      res.send('1');
//	  return;
//   }
//
//   //从数据查找用户名和密码
//   pool.query('select uid from zhai_user where uname=? and upwd=?',[$uname,$upwd],(err,result)=>{
//         if(err){throw err};
//         if(result.length>0){
//			 console.log(result);
//			  console.log( result[0].uid);
//		    res.send({uid:result[0].uid})      //这里面的res.send就是HTML里面的xhr.responseText
//			return;     //这个return打死了爸爸 儿子也没了 但是爷爷还在 但是后面没程序了 爷爷老死了
//		 }
//         res.send('-3');
//		
//   }); 
//});
//
//


module.exports=router;       //把路由器对象导出















