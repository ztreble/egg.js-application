const http = require('http');
const querystring = require('querystring');
const util = require('util');

http.createServer(function (req,res) {
    var post = '';
    //The on method binds an event to a object.
    //通过data事件监听函数，累加到post变量中
    req.on('data',function (chunk) {
        post+=chunk;
    });

    req.on('end',function () {
        post = querystring.parse(post);
        res.end(util.inspect(post));
    });
}).listen(3000);