var http = require('http');
var url = require('url');
var util = require('util');
//使用url.parse方法，可以将原始的path解析为一个对象
http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
    res.end(util.inspect(url.parse(req.url,true).query));
}).listen(3000);