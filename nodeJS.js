var http = require('http');
// var dt = require('./myfirstmodule');
var fs = require('fs');

http.createServer(function (req, res) {
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.write('abc');
    fs.readFile('readFile.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.write('data');
        res.end();
    })
    // res.write("The date and time are currentlya : " + dt.myDateTime());
    // res.write(req.url);

    // console.log('url ne: ', req.url);
    // console.log('url ne: ', typeof req.url);
    // res.end();
}).listen(8090);
