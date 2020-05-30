var events = require('events')
var eventEmitter2 = new events.EventEmitter()

var myEventHandle = function(){
  console.log('Okay, hear scream');
}
var myEventHanlde2 = function(){
  console.log('222222');
}
eventEmitter2.on('scream2', myEventHanlde2)
eventEmitter2.on('scream', myEventHandle)

eventEmitter2.emit('scream')
eventEmitter2.emit('scream2')