var fs = require('fs')

fs.unlink('filenew.txt', function(err){
  if(err) throw err
  console.log('File deleted !');

})