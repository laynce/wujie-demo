var express = require('express');
var path = require('path')
var app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header({
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "X-Requested-With,Content-Type",
      // "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
      // "Content-Type": "application/json; charset=utf-8",
    });
    next();
});

// 设置静态目录
app.use(express.static(path.join(__dirname, 'build')),)

console.log('监听9000')
app.listen(9000);