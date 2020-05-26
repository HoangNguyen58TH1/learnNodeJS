var fs = require('fs')

fs.appendFile('filenew.txt', 'Content file aaa', function(err){
  if(err) throw err;
  console.log('Save');
})

// fs.open('filenew.txt', 'w', function (err, file) {
//   if (err) throw err
//   console.log('Save');
// })

// fs.writeFile('filenew.txt','Content file 2', function(err){
//   if(err) throw err;
//   console.log('Save');
// })