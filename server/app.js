const express=require('express');//引入框架
var cors = require('cors'); //引入cors
var server=express();          //创建web服务器和端口
server.listen(8080);
//启用cors统一伪装跨域，只允许http://127.0.0.1:5500的请求访问该服务端
server.use(cors({
    "origin":"http://127.0.0.1:5500"
  })); 

//const querystring=require('querystring');          //node内置对象 将字符串解析成对象 配合get
const bodyparser=require('body-parser');           //第三方配件 引用来解析http请求体
//使用中间件 这种支持解析其中一种请求体 配合post的
server.use(bodyparser.urlencoded({extend:false}));                                                //           只解析post的普通数据请求，无法解析post文件请求


//server.use(express.static('public'));	   //使用中间件 设置静态资源目录 这样可以通过服务器ip地址+/文件名找到										   

const userRouter=require('./routes/user.js');      //引用第三方路由器(用户模块)
server.use('/user',userRouter);                    //使用路由器('一半的路径',路由器名字)