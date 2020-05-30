var fs = require('fs')

var readStream = fs.createReadStream('filenew.txt')

readStream.on('open', function(){
  console.log('Open file successful');
})