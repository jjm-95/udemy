const http = require('http');


function handle (req, res) {
   res.statusCode = 200;
   res.end("<h1>node.js backend respone</h1>")
};

http.createServer(handle).listen(4000);