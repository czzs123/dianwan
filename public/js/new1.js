 //jquey的动态加载
 $(function(){
    
    $.ajax({
       url:"header.html",
       type:"get",
       //dataType:"jsonp", 这里不需要 因为hrader.html不是json格式的
       success:function(head){
         //console.log(head);
       //header.html中的片段替换掉index.html(后面任意页面)中的header标签(包含标签本身)
        $(head).replaceAll("#ppp");
       //找到header.css文件 将其放到index.html(后面任意页面)中的head的标签里面
       $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head")
      }
    })  
     
     var moved=0;
     //给左按钮绑定事件
     $("#leftbtn").click(function(){
            if(moved!=3){
            moved++;
            //ul移动  transition:all 1s 在css设置
            $("#smimg").css("margin-left",-132*moved)
            }

     })
     $("#rightbtn").click(function(){
        if(moved!=0){
        moved--;
        //ul移动
        $("#smimg").css("margin-left",-132*moved)
        }
    })
    //利用冒跑 给小图片绑定事件函数
    $("#smimg").on("mouseenter","li>a>img",function(){
        $(this).css("margin-top",1).css("margin-left",1)
        //获取小图片的属性
        var src = $(this).attr("data-md");
        //将属性传递给中等图片
        $("#mddimg").attr({src:src});
    })
    $("#smimg").on("mouseleave","li>a>img",function(){
        $(this).css("margin-top",0).css("margin-left",0);  
    })





























 })
 
 //dom的动态加载
 /*var html=`<div  id="header">
  <div class="tb_header">
  <!--header头部 logo-->
  <div class="tb-header__logo-box">
    <a href="index.html" target="_blank"><img src="img/header/logo.png" alt=""></a>
   </div>
   <!--header头部 导航-->
  <div class="tb-header__nav-box">
   <div class="middleline"></div>
    <ul>
        <div class="middleline"></div>
        <li><a href="">电玩</a></li>
        <li><a href="">游戏</a></li>
        <li><a href="">数码</a></li>
        <li><a href="">商城</a></li>
          <div></div>
  </ul>	
    </div>
    <!--header头部 搜索框-->
    <div class="tb-header__search-box">
    <!--  <div class="line"></div> -->
    <input type="text" placeholder="点击查询"><a href=""><img src="img/header/ic_search.png" alt=""></a>
    </div>
    <!--header头部 注册 登陆-->
   <div class="tb-header__login">
    <!--  <div class="line"></div> 文字加线拦不住 必须加搞个元素包着它搞个背景色-->
   <a href="register.html" target="blank">注册</a><a href="login.html" target="_blank">登录</a></div>
   <!--加个底线-->
   <div class="buttonline"></div>
 </div>
   </div>`;
 ppp.innerHTML=html;*/