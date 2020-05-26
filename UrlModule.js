var url = require('url')
var address = 'https://localhost:8090/UrlModule.html?param1=value1&param2=value2'
var q = url.parse(address, true)

console.log(q.host);
console.log(q.pathname.slice(1));
console.log(q.search.slice(1));

var qdata = q.query
console.log(qdata.param1);
console.log(qdata.param2);

