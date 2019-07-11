window.onload = function(){
///////////////////////////////////////////////////////////////////////
/*轮播图特效事件*/
var banner=document.getElementById("homebanner")//整个banner最大范围的元素
var bannerDom=document.querySelector("#bannerstart")//移动的父元素
    console.log(bannerDom);
var bannerNodelist=bannerDom.querySelectorAll(".bannerson")
	console.log(bannerNodelist);
//类数组对象 可以使用appendChild(bannerNodelist[0])API
//insertBefore(bannerNodelist[maxLength],bannerNodelist[0])
var imgWidth=bannerNodelist[0].offsetWidth;//图片长度
console.log(imgWidth);
var maxLength=bannerNodelist.length-1;//最大索引 就是下标
var notmove=false;//判断是否移动中
var timer="";
//初始化 
//insertBefore原理之一 把末尾元素放到原数组第一个位置上 原本元素排后面
bannerDom.insertBefore(bannerNodelist[maxLength],bannerNodelist[0]); 
console.log(bannerNodelist);
bannerDom.style.marginLeft=-imgWidth+'px';
console.log(bannerDom.style.marginLeft);
//insertBefore原理之二 先创建新的节点 把新的节点放到原数组某个位置之前 原数组多里一个新元素
//用克隆
/*自动无缝轮播*/
//外层函数
var index=1   //指数
var dir=1;//指定方向 1:<-图片向
 function move(){ //内层函数
	   //如果为1 往左走 如果为0 往右走
	  console.log(`方向为:${dir}`);
  	       if(index==3){
			   if(dir==1){
                  bannerDom.style.transition=0+'s';
                  bannerDom.style.marginLeft=0+'px';
  	   	          index=1;
  	   	          function haha(){
  	   		         bannerDom.style.transition=1+'s';
                     bannerDom.style.marginLeft=-imgWidth+'px';
					 return dir=1;
  	              }
  	   	          setTimeout(haha,100);//为啥一毫秒不行？  
			   }else if(dir==0){
				      index=2;
			          bannerDom.style.transition=1+'s';
  	                  bannerDom.style.marginLeft=-imgWidth*index+'px';
					  //console.log(bannerDom.style.marginLeft);
					  //指示器亮2按钮
							 if(bannerDom.style.marginLeft==-3632+'px'){
                              btn3.style.backgroundColor="white";
                              btn1.style.backgroundColor="white";
                              btn2.style.backgroundColor="red";
                             }
					  return dir=1;
			   } 
  	       }
  	       else if(index!=3){
			    if(dir==0){
				     index-=1;
				     if(index!=-1){
			           bannerDom.style.transition=1+'s';
  	                   bannerDom.style.marginLeft=-imgWidth*index+'px';
					   //console.log(bannerDom.style.marginLeft);
					   //指示器亮1按钮
							 if(bannerDom.style.marginLeft==-1816+'px'){
                              btn2.style.backgroundColor="white";
                              btn3.style.backgroundColor="white";
                              btn1.style.backgroundColor="red";
                             }
					   //指示器显示三按钮
					   if(bannerDom.style.marginLeft==0+'px'){
                         btn1.style.backgroundColor="white";
                         btn2.style.backgroundColor="white";
                         btn3.style.backgroundColor="red";
                      }
					   return dir=1;
					   //dir=1;
				     }
				     if(index==-1){
				       bannerDom.style.transition=0+'s';		
					   bannerDom.style.marginLeft=-imgWidth*3+'px';
					   index=2;
                       function papa(){
  	   		               bannerDom.style.transition=1+'s';
                           bannerDom.style.marginLeft=-imgWidth*2+'px';
						    //console.log(bannerDom.style.marginLeft);
							//指示器亮2按钮
							 if(bannerDom.style.marginLeft==-3632+"px"){
                              btn1.style.backgroundColor="white";
                              btn3.style.backgroundColor="white";
                              btn2.style.backgroundColor="red";
                            }
						   return dir=1;
  	                   }
  	   	               setTimeout(papa,100);
					   //dir=1;
				     }
			    }
			    if(dir==1){  
				   index+=1;
			       bannerDom.style.transition=1+'s';
  	               bannerDom.style.marginLeft=-imgWidth*index+'px';
                   //console.log(bannerDom.style.marginLeft);
                   //指示器亮1按钮
				    if(bannerDom.style.marginLeft==-1816+'px'){
                       btn2.style.backgroundColor="white";
                       btn3.style.backgroundColor="white";
                       btn1.style.backgroundColor="red";
                    }
		        }
  	       }
          // console.log(index);
		  // console.log(bannerDom.style.marginLeft);
		   //自动转换
                if(bannerDom.style.marginLeft==0+'px'){
                   btn2.style.backgroundColor="white";
                   btn3.style.backgroundColor="white";
                   btn1.style.backgroundColor="red";
                }
                if(bannerDom.style.marginLeft==-3632+"px"){
                   btn1.style.backgroundColor="white";
                   btn3.style.backgroundColor="white";
                   btn2.style.backgroundColor="red";
                }
                if(bannerDom.style.marginLeft==-5448+'px'){
                   btn1.style.backgroundColor="white";
                   btn2.style.backgroundColor="white";
                   btn3.style.backgroundColor="red";
                }
        }

//var time=move;//这里不要加()!
var timer=setInterval(move,3000);
/*鼠标移动到位置停止*/
banner.addEventListener("mouseenter",function(){
   clearInterval(timer);
   console.log("暂停");
})
/*鼠标离开开始*/
banner.addEventListener("mouseleave",function(){
   timer=setInterval(move,3000);
   console.log("开始");
})				
/*点击图片移动*/
//左右按钮
var pre=document.getElementById("pre");
var next=document.getElementById("next");
pre.addEventListener('click',function(){    //当点击pre按钮 dir为1 启动move函数
       dir=1;
	   move();
});
next.addEventListener('click',function(){   //当点击next按钮 dir为1 启动move函数
       dir=0;
	   move();
});

/*点击指示器跑到相应位置*/
//查找指示器 点击
var btn=document.querySelector(".homebanner_indicator_bottom")
var btn1=btn.querySelector(".homebanner_indicator_bottom>span:first-child")
	btn1.style.backgroundColor="red";
var btn2=btn.querySelector(".homebanner_indicator_bottom>span:nth-child(2)")
var btn3=btn.querySelector(".homebanner_indicator_bottom>span:nth-child(3)")
btn1.addEventListener("click",function(){
      btn3.style.backgroundColor="white";
      btn2.style.backgroundColor="white";
      btn1.style.backgroundColor="red";
	  bannerDom.style.transition=0+'s';
	  bannerDom.style.marginLeft=-1816+'px';
	  index=1;
})
btn2.addEventListener("click",function(){
      btn3.style.backgroundColor="white";
      btn1.style.backgroundColor="white";
      btn2.style.backgroundColor="red";
	  bannerDom.style.transition=0+'s';
	  bannerDom.style.marginLeft=-3632+'px';
	  index=2;
})
btn3.addEventListener("click",function(){
      btn1.style.backgroundColor="white";
      btn2.style.backgroundColor="white";
      btn3.style.backgroundColor="red";
	  bannerDom.style.transition=0+'s';
	  bannerDom.style.marginLeft=-5448+'px';
	  index=3;
})
/*指示器根据自动轮播自动亮按钮 写在函数里面*/






/*资讯中心第四块:近期发售的事件*/
//查找要绑定事件的元素
var fashou=document.querySelector("#gameboxall");
console.log(fashou);
//绑定点击事件(父元素ul 利用冒泡)
fashou.addEventListener("click",function(e){
    if(e.target.nodeName=="LI"){
	  //查找要修改的元素
      var fashoucontents=document.querySelectorAll(".game_box_containerAll");
	  //修改它
	  var fashousons=document.querySelectorAll(".game_box_containerAll");
	  //全消失
	  for(var son of fashousons){
	      son.className=".game_box_containerAll none";
	  }
	  //得到目标元素的属性值 "#content1" 字符串
      var fashoucontentsid=e.target.getAttribute("data-target");
	  //通过这个字符串配合querySelector("#/.xxxxx")的语法 查找对应要修改元素
      var content=document.querySelector(fashoucontentsid);
      //显示当前内容
	  content.className="game_box_containerAll";
	}
})





















/////////////////////////////////////////////////////////////////////////
}