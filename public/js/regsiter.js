window.onload = function(){
	  var reg1=/^[\u4e00-\u9fa5\w]{2,8}$/;
	  var reg2=/^[\w]{6,12}$/;
	 //用户名
	 var uname=document.getElementById("uname");
     var namesign=document.getElementById("name");
	 uname.addEventListener("focus",function(){
	        namesign.innerHTML="请输入2-8位汉字,英文,数字,下划线"
	 })


	 //blur 和 keyup
     uname.addEventListener("keyup",function(){
	     //var reg1=/^[\u4e00-\u9fa5\w]{1,6}$/;
		 if(reg1.test(uname.value)==true){
		    namesign.innerHTML="恭喜！用户名格式正确！";namesign.style.color="white";
			//成功的情况下进行ajax向后台传输数据进行验证用户名是否重复？
			  var url="http://127.0.0.1:8080/user/rega";
			  $.ajax({
			     type:"post", 
                 url:url,
			     data:{uname:$("#uname").val()},
                 success:function(data){
                    console.log(data)
					//重复
					if(data==-1){
                      namesign.style.color="red";
					  namesign.innerHTML="用户名重复"
					//否则不重复
					}else{
					  namesign.style.color="white";
					  namesign.innerHTML="恭喜！用户名可用！"
					}
                 },
                 //dataType:,
			  })  
		 }else{
		    namesign.innerHTML="用户名格式错误";
            namesign.style.color="red";
			return;
		 }
	 })



     //用户密码
     var upwd=document.getElementById("upwd");
     var pwdsign=document.getElementById("pwd");
     upwd.addEventListener("focus",function(){
	        pwdsign.innerHTML="请输入6到12位英文,数字,下划线"
	 })
     upwd.addEventListener("keyup",function(){
	     //var reg2=/^[\w]{6,12}$/;
		 if(reg2.test(upwd.value)==true){
		    pwdsign.innerHTML="恭喜！密码格式格式正确！";
			pwdsign.style.color="white";
			//成功的情况下进行ajax向后台传输数据进行验证
		 }else{
		    pwdsign.innerHTML="密码格式错误";
            pwdsign.style.color="red";
			return;
		 }
	 })
     //提交数据
	 var button=document.getElementsByTagName("button");
	 button[0].addEventListener("click",function(){
	     if(reg1.test(uname.value)==true&&reg2.test(upwd.value)==true){
			 //sessionStorage.setItem('uname',$("#uname").val());
              var url="http://127.0.0.1:8080/user/reg";
              //这里用jquery的ajax和js原生小黄人四部曲一样
			  $.ajax({
			     type:"post", 
                 url:url,
			     data:{uname:$("#uname").val(),upwd:$("#upwd").val()},
                 success:function(data){
                    console.log(data)
					//注册成功
					if(data==1){
					   alert("注册成功");
					   //返回主页带着用户输入的姓名 惊醒两次解码 现在没人用这种方法
					   //window.location.href = url+"&name=" + encodeURI(encodeURI(name)) ;
					    //浏览器的session临时保存 用户名 
			            sessionStorage.setItem('uname',$("#uname").val());
					    window.location.href=`index.html`;

					}
					//注册失败
                       if(data==-1){
					   alert("用户名重复");
					}
                 },
                 //dataType:,
			  })
		    
		 }else if(uname.value==""||upwd.value==""){
		    alert("用户名或密码不能为空");
		 }else{
		    alert("用户名或密码格式不正确");
		 }
	 })


}








// /*用户名 焦点失焦事件*/
//	   /*function uname_focus(){uname1.innerHTML='用户名为6~12位';}*/
//	   function check_uname(){
//	        /*if (uname.value==''){
//                uname1.innerHTML='用户名不能为空';
//	        }*/
//			var xhr=new XMLHttpRequest();       //1.创建异步对象 XML:传输数据 HTTP:显示数据 var xhr=new                                                   XMLHttpRequest();
//	        xhr.onreadystatechange=function(){  //4.绑定监听器 接收响应数据 
//		   if(xhr.readyState==4&&xhr.status==200){                                                                  
//		       var result=xhr.responseText;//xhr.responseText 是服务器响应回来的数据
//			   /*alert(result);*/
//               /*用户名为空验证 前端对应后端的 通过res.send==responseTEXT 连接*/
//               if(result==0){
//						 uname1.style.color="white";
//			       uname1.innerHTML='用户名不能为空';
//           
//			   }
//			   else if (result==2)
//			   {          uname1.style.color="red";
//                   uname1.innerHTML='用户名不能重复';
//			   }else if (result==3) {
//			       uname1.innerHTML='用户名可用';
//						 uname1.style.color="green";
//			    }
//		     }		                                			                          
//           }   
//	           xhr.open('post','/user/rega',true)   //2.创建连接 打开请求 xhr.open('方法','路径+id+值',是否异步?);
//	           xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
//	         //请求头默认设置请求主体内容是普通字符 Content-Type:text/plain;charset=UTF-8
//			 //但传参数主体中有特殊符号= & 所以需要修改数据内容类型  (谁看不懂？？？)
//	            var formdata='uname='+uname.value+'&upwd='+upwd.value;//get方法'路径+id+值'全写这里  post要var formdata 	     
//                xhr.send(formdata);        //3.发送请求		
//	         }
//
//
//	             /*密码 焦点失焦事件*/
//	                /*function upwd_focus(){upwd1.innerHTML='用户密码为为6~12位';}*/
//	      function check_upwd(){
//	        if(upwd.value==''){
//			    upwd1.innerHTML='密码不能为空';
//			   }
//
//	         }
//
//              /*提交注册数据 post*/
//                function register(){
//	          var xhr=new XMLHttpRequest();       //1.创建异步对象 XML:传输数据 HTTP:显示数据 var xhr=new                                                   XMLHttpRequest();
//	            xhr.onreadystatechange=function(){  //4.绑定监听器 接收响应数据 
//		           if(xhr.readyState==4&&xhr.status==200){                                                                  
//		       var result=xhr.responseText;//xhr.responseText 是服务器响应回来的数据
//			   /*alert(result);*/
//               /*用户名为空验证 前端对应后端的 通过res.send==responseTEXT 连接*/
//               if(result==0){
//			      alert('用户名不能为空');
//			   }
//               else if(result==1){
//			      alert('用户密码不能为空');
//			   }
//			   else if (result==2)
//			   {
//                   alert('用户名重复不能用')
//			   }else{
//			       alert('注册成功!')
//						 location.href="homepage.html";
//			   }
//
//		   }		                                			                          
//         }   
//	     xhr.open('post','/user/reg',true)   //2.创建连接 打开请求 xhr.open('方法','路径+id+值',是否异步?);
//	     xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
//	        //请求头默认设置请求主体内容是普通字符 Content-Type:text/plain;charset=UTF-8
//			//但传参数主体中有特殊符号= & 所以需要修改数据内容类型  (谁看不懂？？？)
//	     var formdata='uname='+uname.value+'&upwd='+upwd.value;//get方法'路径+id+值'全写这里  post要var formdata 	     
//         xhr.send(formdata);        //3.发送请求
//         }







