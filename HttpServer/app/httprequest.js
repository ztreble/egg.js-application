var http = require('http');
var querystring = require(querystring);
var contents = querystring.stringify({
    name:'byvoid',
    email:'byvoid@byvoid.com',
    address:'Zijign 2#,Tsinghua University',
});

var options = {
    host:'www.byvoid.com',
    path:'.application/node/post.php',
    method:'POST',
    headers:{
        'Content-Type':'application/x-www-form-urlencoded',
        'Content-Length':contents.length
    }
};

var req = http.request(options,function (res) {
    res.setEncoding('')
})
