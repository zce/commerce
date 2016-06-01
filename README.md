# e-commerce

A e-commerce system project for teaching purpose

[![Build Status](https://travis-ci.org/zce/e-commerce.svg?branch=master)](https://travis-ci.org/zce/e-commerce)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Dependencies Status](https://david-dm.org/zce/e-commerce.svg)](https://david-dm.org/zce/e-commerce)

-----
## Day 01


### 课程简介


### 课程目标


### 数据库介绍

```sql
--
-- 表的结构 `options`
--

CREATE TABLE IF NOT EXISTS `options` (
  `id` int NOT NULL AUTO_INCREMENT,
  `key` varchar(200) NOT NULL,
  `value` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `key` (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(60) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nickname` varchar(60) NOT NULL,
  `email` varchar(100) NOT NULL,
  `status` varchar(60) NOT NULL DEFAULT 'active',
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  `role` varchar(60) NOT NULL DEFAULT 'customer',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL DEFAULT '',
  `description` text,
  `count` int NOT NULL DEFAULT '0',
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  `parent_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `parent_id` (`parent_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `excerpt` text,
  `content` longtext,
  `category` int NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'draft',
  `comment_count` int NOT NULL DEFAULT '0',
  `view_count` int NOT NULL DEFAULT '0',
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `type_status_user_parent` (`type`,`status`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `comments`
--

CREATE TABLE IF NOT EXISTS `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` text,
  `status` varchar(20) NOT NULL DEFAULT 'moderated',
  `user_agent` varchar(20) NOT NULL DEFAULT '',
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  `post_id` int NOT NULL,
  `user_id` int NOT NULL,
  `parent_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `post_id` (`post_id`),
  KEY `parent_id` (`parent_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

```


### 搭建项目结构

#### 依赖NPM

- 模板引擎 https://github.com/donpark/hbs
- 控制台日志 https://github.com/expressjs/morgan


### 回顾请求和响应


### 引入Connect框架


### 使用Express构建项目结构



-----
## Day 02


### 完成注册逻辑


### 发送邮件


### 登录


### Cookie & Session


### 会员信息维护

- 用户资料修改
- 头像上传
- 头像截取
- 生成缩略图
- FLASH头像上传组件


### 前台功能

- 商品列表
- 商品详细页



-----
## Day 03





-----
## Day 04





-----
## Day 05





-----
## Day 06


- https://github.com/petehunt/webpack-howto/blob/master/README-zh.md
- https://hulufei.gitbooks.io/react-tutorial/content/webpack.html
- https://segmentfault.com/a/1190000002551952
- http://www.infoq.com/cn/articles/react-and-webpack
