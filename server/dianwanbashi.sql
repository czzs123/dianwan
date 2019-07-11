SET NAMES UTF8;
DROP DATABASE IF EXISTS dianwanbashi;
CREATE DATABASE dianwanbashi CHARSET=UTF8;
USE dianwanbashi;

/**用户模块**/
  CREATE TABLE dianwanbashi_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,    #id 用户无需填写
  uname VARCHAR(32) unique,              #账号  旧版本是字节 新版本是字符                          
  upwd VARCHAR(32),                      #密码
  birthday datetime,                     #生日
  sex BOOLEAN,                           #性别  true-女 flase-男
  avatar VARCHAR(128),                   #头像图片路径
  user_fname VARCHAR(32),                #用户名 如王小明
  intro VARCHAR(10000)                   #自我简介
);


































